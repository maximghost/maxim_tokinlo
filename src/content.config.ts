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
          site: z.url().optional(),
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

/**
 * News, one Markdown file per item and per language: src/content/news/<lang>/<slug>.md
 * The latest items are teased on the home page; each item also has its own page under /<lang>/actualites/.
 */
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    tag: z.string(),
    date: z.coerce.date(),
    status: z.string().optional(),
    summary: z.string(),
    /** 0–100, shown as a progress bar when set. */
    progress: z.number().min(0).max(100).optional(),
    stack: z.array(z.string()).default([]),
    /** External URLs or internal paths (e.g. /fr/projets/gamberge/). */
    links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
    highlights: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    steps: z
      .array(
        z.object({
          label: z.string(),
          state: z.enum(['done', 'current', 'next']),
          note: z.string().optional(),
        }),
      )
      .default([]),
    order: z.number().int().default(0),
  }),
});

export const collections = { projects, about, news };
