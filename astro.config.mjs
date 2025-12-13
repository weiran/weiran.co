import { defineConfig } from 'astro/config'
import remarkGfm from 'remark-gfm'
import remarkSmartypants from 'remark-smartypants'

export default defineConfig({
  site: 'https://weiranzhang.com',
  trailingSlash: 'never',
  markdown: {
    remarkPlugins: [remarkGfm, remarkSmartypants],
    shikiConfig: {
      theme: 'github-light',
    },
  },
})
