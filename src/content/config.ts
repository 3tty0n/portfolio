import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
  }),
});

const home = defineCollection({
  type: 'content',
});

const supervision = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    level: z.enum(['phd', 'masters', 'bachelors']),
    topic: z.string(),
    period: z.string(),
  }),
});

const teaching = defineCollection({
  type: 'content',
  schema: z.object({
    course: z.string(),
    role: z.string(),
    institution: z.string(),
    semester: z.string(),
    sortDate: z.date(),
  }),
});

const services = defineCollection({
  type: 'content',
});

const projects = defineCollection({
  type: 'content',
});

export const collections = { blog, home, supervision, teaching, services, projects };
