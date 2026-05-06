import { getCollection, getEntry, render, type CollectionEntry } from "astro:content";

interface Metadata {
  title: string;
  description: string;
  resume: string;
  currentWork: {
    company: string;
    website: string;
    startDate: string;
  };
  heroText: string;
}

export const metadata: Metadata = (await getCollection("metadata"))
  .map((metadata: CollectionEntry<"metadata">) => ({
    title: metadata.data.siteTitle,
    description: metadata.data.siteDescription,
    resume: metadata.data.resumeUrl,
    currentWork: metadata.data.currentWork,
    heroText: metadata.body ?? "",
}))[0];

const metadataContent = await getEntry("metadata", "metadata");
export const { Content: HeroContent } = await render(metadataContent);
