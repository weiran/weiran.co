import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

const excerpt = (markdown) => {
  const firstParagraph = markdown
    .trim()
    .split(/\n\s*\n/)
    .find((p) => p.trim().length > 0)
  if (!firstParagraph) return ''
  return firstParagraph
    .replace(/!\[[^\]]*\]\([^)]+\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[`*_>#]/g, '')
    .trim()
}

export async function GET(context) {
  const posts = (await getCollection('blog'))
    .filter((p) => p.data.type !== 'page')
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())

  return rss({
    title: 'weiranzhang.com',
    description: "Weiran Zhang's personal website",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: excerpt(post.body),
      link: post.data.passthroughUrl ?? `/blog/${post.slug}`,
    })),
  })
}
