import {defineCollection} from "astro/content/config";
import {glob} from "astro/loaders";
import { z } from "astro/zod";
import { Octokit } from "octokit";
import { GITHUB_TOKEN } from "astro:env/server";

const metadata = defineCollection({
  loader: glob({ base: "../../packages/content/site", pattern: "**/*.md" }),
})

const about = defineCollection({
  loader: glob({ base: "../../packages/content/site", pattern: "**/*.md" }),
})

const experiences = defineCollection({
  loader: glob({ base: "../../packages/content/experiences", pattern: "**/*.md" }),
});

const projects = defineCollection({
  loader: glob({ base: "../../packages/content/projects", pattern: "**/*.md" }),
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
      logger.info(`GITHUB_TOKEN: ${GITHUB_TOKEN}`);

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
  }
});

export const collections = {
  metadata,
  about,
  experiences,
  projects,
  repositories,
};