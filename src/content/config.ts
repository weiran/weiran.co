import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    passthroughUrl: z.string().url().optional(),
    type: z.string().optional(),
  }),
})

export const collections = { blog }

