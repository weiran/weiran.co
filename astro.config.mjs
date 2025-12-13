import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import remarkGfm from 'remark-gfm'
import remarkSmartypants from 'remark-smartypants'

export default defineConfig({
  site: 'https://weiranzhang.com',
  trailingSlash: 'never',
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkGfm, remarkSmartypants],
    shikiConfig: {
      theme: 'github-light',
    },
  },
})
