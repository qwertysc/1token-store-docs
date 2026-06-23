import { readdir, readFile, rm, stat, writeFile } from 'node:fs/promises'
import { extname, join, relative } from 'node:path'
import sharp from 'sharp'

const workspace = process.cwd()
const imageRoot = join(workspace, 'docs/public/images')
const minSavingsRatio = 0.9

async function listFiles(dir) {
  const out = []
  const entries = await readdir(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      out.push(...(await listFiles(fullPath)))
    } else if (entry.isFile()) {
      out.push(fullPath)
    }
  }

  return out
}

async function listMarkdownFiles(dir) {
  const out = []
  const entries = await readdir(dir, { withFileTypes: true })

  for (const entry of entries) {
    if (entry.name === '.git' || entry.name === 'node_modules' || entry.name === 'docs/.vitepress/dist') continue
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      out.push(...(await listMarkdownFiles(fullPath)))
    } else if (entry.isFile() && extname(entry.name).toLowerCase() === '.md') {
      out.push(fullPath)
    }
  }

  return out
}

function markdownRefs(filePath) {
  const publicRel = relative(join(workspace, 'docs/public'), filePath).replaceAll('\\', '/')
  const workspaceRel = relative(workspace, filePath).replaceAll('\\', '/')

  return {
    oldRefs: [`/${publicRel}`, workspaceRel],
    newRefs: [`/${publicRel.replace(/\.png$/i, '.webp')}`, workspaceRel.replace(/\.png$/i, '.webp')]
  }
}

const pngFiles = (await listFiles(imageRoot)).filter((file) => extname(file).toLowerCase() === '.png')
const converted = []
const skipped = []

for (const pngPath of pngFiles) {
  const webpPath = pngPath.replace(/\.png$/i, '.webp')
  const original = await stat(pngPath)

  await sharp(pngPath)
    .webp({ quality: 84, effort: 6 })
    .toFile(webpPath)

  const compressed = await stat(webpPath)

  if (compressed.size < original.size * minSavingsRatio) {
    converted.push({
      pngPath,
      webpPath,
      originalSize: original.size,
      compressedSize: compressed.size
    })
    await rm(pngPath)
  } else {
    await rm(webpPath)
    skipped.push({
      pngPath,
      originalSize: original.size,
      compressedSize: compressed.size
    })
  }
}

const mdFiles = await listMarkdownFiles(workspace)
for (const mdPath of mdFiles) {
  let markdown = await readFile(mdPath, 'utf8')
  let changed = false

  for (const item of converted) {
    const refs = markdownRefs(item.pngPath)
    for (let i = 0; i < refs.oldRefs.length; i += 1) {
      if (markdown.includes(refs.oldRefs[i])) {
        markdown = markdown.replaceAll(refs.oldRefs[i], refs.newRefs[i])
        changed = true
      }
    }
  }

  if (changed) {
    await writeFile(mdPath, markdown)
  }
}

const originalTotal = converted.reduce((sum, item) => sum + item.originalSize, 0)
const compressedTotal = converted.reduce((sum, item) => sum + item.compressedSize, 0)

console.log(JSON.stringify({
  converted: converted.length,
  skipped: skipped.length,
  originalBytes: originalTotal,
  compressedBytes: compressedTotal,
  savedBytes: originalTotal - compressedTotal
}, null, 2))
