import { createHash } from 'node:crypto'
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import { extname, join, relative } from 'node:path'

const workspace = process.cwd()
const publicImageDir = join(workspace, 'docs/public/images')
const feishuImagePattern =
  /https:\/\/internal-api-drive-stream\.feishu\.cn\/space\/api\/box\/stream\/download\/authcode\/\?code=[^)>\s|]+/g

const skipDirs = new Set(['.git', 'node_modules', 'dist', 'cache'])

async function listMarkdownFiles(dir) {
  const out = []
  const entries = await readdir(dir, { withFileTypes: true })

  for (const entry of entries) {
    if (entry.name.startsWith('.') && entry.name !== '.vitepress') continue
    if (skipDirs.has(entry.name)) continue

    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      out.push(...(await listMarkdownFiles(fullPath)))
    } else if (entry.isFile() && extname(entry.name).toLowerCase() === '.md') {
      out.push(fullPath)
    }
  }

  return out
}

function slugForFile(filePath) {
  const rel = relative(workspace, filePath)
  if (rel.includes('token-token') || rel.includes('TokenToken')) return 'token-token'
  if (rel.includes('ai-image') || rel.includes('AI生图')) return 'ai-image'
  if (rel.includes('codex') || rel.includes('Codex')) return 'codex'
  if (rel.includes('ima-gpt') || rel.includes('IMA+GPT')) return 'ima-gpt'
  return 'image'
}

function extensionFrom(response, buffer) {
  const type = response.headers.get('content-type') || ''
  if (type.includes('png')) return 'png'
  if (type.includes('jpeg') || type.includes('jpg')) return 'jpg'
  if (type.includes('webp')) return 'webp'
  if (type.includes('gif')) return 'gif'

  const sig = buffer.subarray(0, 12).toString('hex')
  if (sig.startsWith('89504e47')) return 'png'
  if (sig.startsWith('ffd8ff')) return 'jpg'
  if (sig.startsWith('52494646') && buffer.subarray(8, 12).toString() === 'WEBP') return 'webp'
  if (buffer.subarray(0, 3).toString() === 'GIF') return 'gif'
  return 'bin'
}

function replacementPath(filePath, assetPath) {
  const rel = relative(workspace, filePath)
  if (rel.startsWith('docs/guide/')) {
    return `/${relative(join(workspace, 'docs/public'), assetPath).replaceAll('\\', '/')}`
  }
  return relative(join(workspace, rel, '..'), assetPath).replaceAll('\\', '/')
}

const mdFiles = await listMarkdownFiles(workspace)
const canonicalFiles = [
  'docs/guide/token-token.md',
  'docs/guide/codex.md',
  'docs/guide/ai-image.md',
  'docs/guide/ima-gpt.md'
].map((file) => join(workspace, file))

const orderedFiles = [
  ...canonicalFiles.filter((file) => mdFiles.includes(file)),
  ...mdFiles.filter((file) => !canonicalFiles.includes(file)).sort()
]

const urlMap = new Map()
const counters = new Map()

for (const file of orderedFiles) {
  const markdown = await readFile(file, 'utf8')
  const urls = markdown.match(feishuImagePattern) || []

  for (const url of urls) {
    if (urlMap.has(url)) continue

    const slug = slugForFile(file)
    const next = (counters.get(slug) || 0) + 1
    counters.set(slug, next)

    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Failed to download ${url}: ${response.status} ${response.statusText}`)
    }

    const buffer = Buffer.from(await response.arrayBuffer())
    const ext = extensionFrom(response, buffer)
    const shortHash = createHash('sha256').update(url).digest('hex').slice(0, 8)
    const fileName = `${slug}-${String(next).padStart(2, '0')}-${shortHash}.${ext}`
    const assetPath = join(publicImageDir, slug, fileName)

    await mkdir(join(publicImageDir, slug), { recursive: true })
    await writeFile(assetPath, buffer)
    urlMap.set(url, assetPath)
  }
}

for (const file of mdFiles) {
  let markdown = await readFile(file, 'utf8')
  let changed = false

  for (const [url, assetPath] of urlMap.entries()) {
    if (!markdown.includes(url)) continue
    markdown = markdown.replaceAll(url, replacementPath(file, assetPath))
    changed = true
  }

  if (changed) {
    await writeFile(file, markdown)
  }
}

console.log(JSON.stringify({
  downloaded: urlMap.size,
  markdownFiles: mdFiles.length,
  imageDir: relative(workspace, publicImageDir)
}, null, 2))
