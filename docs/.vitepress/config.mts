import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'TokenToken 文档',
  description: 'TokenToken 平台使用、Codex 接入、AI 生图和 ima 接入教程',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '文档', link: '/' },
      { text: '官网', link: 'https://1token-store.com/' },
      { text: 'API 密钥', link: 'https://1token-store.com/keys' }
    ],
    sidebar: [
      {
        text: '平台入门',
        items: [
          { text: 'TokenToken 使用文档', link: '/guide/token-token' }
        ]
      },
      {
        text: '接入教程',
        items: [
          { text: 'Codex 使用教程', link: '/guide/codex' },
          { text: 'AI 生图', link: '/guide/ai-image' },
          { text: 'ima + GPT', link: '/guide/ima-gpt' }
        ]
      }
    ],
    outline: {
      level: [2, 4],
      label: '本页目录'
    },
    search: {
      provider: 'local'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  },
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['meta', { property: 'og:title', content: 'TokenToken 文档' }],
    ['meta', { property: 'og:description', content: 'TokenToken 平台使用、Codex 接入、AI 生图和 ima 接入教程' }]
  ]
})
