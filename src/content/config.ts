import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    passthroughUrl: z.string().url().optional(),
    type: z.string().optional(),
    draft: z.boolean().optional(),
  }),
})

export const collections = { blog }
