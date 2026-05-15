import { GITHUB_TOKEN } from "astro:env/server";
import { defineCollection } from "astro/content/config";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { Octokit } from "octokit";

const metadata = defineCollection({
  loader: glob({ base: "../../packages/content/site/metadata", pattern: "**/*.md" }),
});

const about = defineCollection({
  loader: glob({ base: "../../packages/content/site/about", pattern: "**/*.md" }),
  schema: ({ image }) =>
    z.object({
      backend: z.object({
        title: z.string(),
        iconName: z.string(),
        tldr: z.string(),
        clients: z.array(
          z.object({
            name: z.string(),
            website: z.string(),
            logo: image(),
          }),
        ),
      }),
      frontend: z.object({
        title: z.string(),
        iconName: z.string(),
        tldr: z.string(),
        clients: z.array(
          z.object({
            name: z.string(),
            website: z.string(),
            logo: image(),
          }),
        ),
      }),
      infra: z.object({
        title: z.string(),
        iconName: z.string(),
        tldr: z.string(),
        clients: z.array(
          z.object({
            name: z.string(),
            website: z.string(),
            logo: image(),
          }),
        ),
      }),
      stack: z.array(z.string()),
    }),
});

const experiences = defineCollection({
  loader: glob({ base: "../../packages/content/site/experiences", pattern: "**/*.md" }),
});

const projects = defineCollection({
  loader: glob({ base: "../../packages/content/site/projects", pattern: "**/*.md" }),
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      status: z.string(),
      type: z.string(),
      title: z.string(),
      cover: image(),
      repository: z.string(),
      external: z.string(),
      stack: z.array(z.string()),
    }),
});

const repositories = defineCollection({
  loader: {
    name: "github-loader",
    load: async ({ store, logger }) => {
      const octokit = new Octokit({ auth: GITHUB_TOKEN });

      try {
        const octokitData = await octokit.rest.search.repos({
          q: "user:sineto fork:false is:public",
          sort: "stars",
          order: "desc",
          per_page: 11,
        });

        const items = octokitData.data.items;

        store.clear();

        for (const repo of items) {
          store.set({ id: repo.id.toString(), data: repo });
        }

        logger.info(`Successfully synced ${octokitData.data.items.length} repositories.`);
      } catch (error) {
        logger.error(`GitHub API Error: ${error instanceof Error ? error.message : String(error)}`);
      }
    },
  },
});

export const collections = {
  metadata,
  about,
  experiences,
  projects,
  repositories,
};
