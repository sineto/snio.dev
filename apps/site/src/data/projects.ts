import { type CollectionEntry, getCollection } from "astro:content";

export interface ProjectFrontmatter {
  order: number;
  status: string;
  type: string;
  title: string;
  cover: any;
  repository: string;
  external: string;
  stack: string[];
}

export interface Project {
  meta: ProjectFrontmatter;
  content: string;
}

export const projects: Project[] = (await getCollection("projects"))
  .map((project: CollectionEntry<"projects">) => ({
    content: project.rendered?.html ?? "",
    meta: {
      order: project.data.order,
      status: project.data.status,
      type: project.data.type,
      title: project.data.title,
      cover: project.data.cover,
      repository: project.data.repository,
      external: project.data.external,
      stack: project.data.stack,
    },
  }))
  .sort((a: Project, b: Project) => {
    return a.meta.order - b.meta.order;
  });
