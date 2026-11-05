import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Projects, one Markdown file per project and per language:
 * src/content/projects/<lang>/<slug>.md
 * The entry id is "<lang>/<slug>", e.g. "fr/gamberge".
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.string().optional(),
      tagline: z.string(),
      summary: z.string(),
      role: z.string(),
      period: z.string(),
      status: z.string(),
      stack: z.array(z.string()).default([]),
      stats: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
      links: z
        .object({
          demo: z.url().optional(),
          repo: z.url().optional(),
        })
        .default({}),
      images: z.array(z.object({ src: image(), alt: z.string() })).default([]),
      featured: z.boolean().default(false),
      confidential: z.boolean().default(false),
      order: z.number().int(),
    }),
});

/** The About page, one Markdown file per language: src/content/about/<lang>.md */
const about = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/about' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { projects, about };
