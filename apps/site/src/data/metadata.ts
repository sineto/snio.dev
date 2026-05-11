import { render } from "astro:content";
import { type Lang, getEntryByLang} from "@repo/content/content.utils";
import type { AstroComponentFactory } from "astro/runtime";

interface MetadataEntry {
  title: string;
  description: string;
  resume: string;
  herotldr: string;
  currentWork: {
    company: string;
    website: string;
    startDate: string;
  };
}

export const getMetadataEntry = async (lang: Lang) => {
  const entry = await getEntryByLang("metadata", "metadata", lang)
  return {
    title: entry?.data.siteTitle,
    description: entry?.data.siteDescription,
    resume: entry?.data.resumeUrl,
    currentWork: entry?.data.currentWork,
    herotldr: entry?.body ?? "",
  } as MetadataEntry
}

export const getHeroContent = async (lang: Lang): Promise<AstroComponentFactory> => {
  const metadataContent = await getEntryByLang("metadata", "metadata", lang);
  if (!metadataContent) return {};
  const { Content: HeroContent } = await render(metadataContent);
  return HeroContent;
}