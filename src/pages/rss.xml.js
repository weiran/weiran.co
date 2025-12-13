import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { excerpt } from '../lib/text'
import { site } from '../config/site'

export async function GET(context) {
  const posts = (await getCollection('blog'))
    .filter((p) => p.data.type !== 'page' && !p.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())

  return rss({
    title: site.title,
    description: site.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description ?? excerpt(post.body),
      link: post.data.passthroughUrl ?? `/blog/${post.slug}`,
    })),
  })
}
