import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { Octokit } from "octokit";
import { GITHUB_TOKEN } from "@/data/open-source.ts";

const experiences = defineCollection({
  loader: glob({ base: "../../packages/content/experiences", pattern: "*.md" }),
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
  loader: async () => {
    const octokit = new Octokit({ auth: GITHUB_TOKEN });
    const octokitData = await octokit.rest.search.repos({
      q: "user:sineto fork:false is:public",
      sort: "stars",
      order: "desc",
      per_page: 11,
    });

    return octokitData.data.items.map((repo) => ({
      ...repo,
      id: repo.id.toString(),
    }));
  },
});

const metadata = defineCollection({
  loader: glob({ base: "../../packages/content/site", pattern: "metadata.md" }),
});

const about = defineCollection({
  loader: glob({ base: "../../packages/content/site", pattern: "about.md" }),
});

export const collections = {
  metadata,
  about,
  experiences,
  projects,
  repositories,
};
