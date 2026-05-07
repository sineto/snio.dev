import { type CollectionEntry, getCollection } from "astro:content";
import { format, compareAsc } from "date-fns";

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

export const experiences: Experience[] = (await getCollection("experiences"))
  .map((job: CollectionEntry<"experiences">) => ({
    content: job.rendered?.html ?? "",
    meta: {
      title: job.data.title,
      company: job.data.company,
      website: job.data.website,
      position: job.data.position,
      startDate: format(new Date(job.data.startDate), "MMM, yyyy"),
      endDate: format(new Date(job.data.endDate), "MMM, yyyy")
    },
  }))
  .sort((a, b) => {
    const startDate = format(new Date(a.meta.endDate), "MMM, yyyy");
    const endDate = format(new Date(b.meta.endDate), "MMM, yyyy");
    return compareAsc(endDate, startDate);
  });
