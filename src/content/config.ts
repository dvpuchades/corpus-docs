import { defineCollection, z } from "astro:content";

const sectionEnum = z.enum([
  "getting-started",
  "daily-use",
  "training",
  "health-signals",
  "privacy",
  "faq",
]);

const docs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    section: sectionEnum,
    order: z.number().default(99),
    updated: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

const privacy = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    version: z.string(),
    effective: z.coerce.date(),
    updated: z.coerce.date(),
  }),
});

export const collections = { docs, privacy };
