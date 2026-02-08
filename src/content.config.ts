import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			tags: z.array(z.string()).optional(),
			author: z.string().optional(),
			authorAvatar: z.string().optional(),
			views: z.number().optional(),
			heroImage: image().optional(),
			externalLink: z.string().optional(),
			isPaid: z.boolean().optional(),
		}),
});

const tools = defineCollection({
	// Load Markdown files in the `src/content/tools/` directory.
	loader: glob({ base: './src/content/tools', pattern: '**/*.md' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			version: z.string().optional(),
			downloads: z.number().optional(),
			rating: z.number().optional(),
			tags: z.array(z.string()).optional(),
			icon: z.string().optional(),
			screenshot: image().optional(),
		}),
});

export const collections = { blog, tools };
