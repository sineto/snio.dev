import { getCollection } from "astro:content";

export interface ExperienceFrontmatter {
	title: string;
	company: string;
	website: string;
	position: string;
	startDate: string;
	endDate: string;
}

export interface Experience {
	meta: ExperienceFrontmatter;
	content: string;
}

export const experiences: Experience[] = (await getCollection("experiences")).map(
  (job: any) => ({
    content: job.rendered.html,
    meta: {
      title: job.data.title,
      company: job.data.company,
      website: job.data.website,
      position: job.data.position,
      startDate: job.data.startDate,
      endDate: job.data.endDate,
    },
  })
).sort(
  (a, b) => new Date(b.meta.startDate).getDate() - new Date(a.meta.startDate).getDate()
);
