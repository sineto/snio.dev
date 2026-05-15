import { render } from "astro:content";
import { getEntryByLang, type Lang } from "@repo/content/content.utils";
import type { AstroComponentFactory } from "astro/runtime";

export interface Client {
  name: string;
  website: string;
  logo: string;
}

export interface Card {
  title: string;
  iconName: string;
  tldr: string;
  clients: Client[];
}

export interface AboutCard {
  type: Card[];
  stack: string[];
  content: string;
}

export const getAboutEntry = async (lang: Lang) => {
  const entry = await getEntryByLang("about", "about", lang);
  return {
    type: [entry?.data.backend, entry?.data.frontend, entry?.data.infra],
    stack: entry?.data.stack,
    content: entry?.rendered?.html ?? "",
  } as AboutCard;
};

export const getAboutContent = async (lang: Lang): Promise<AstroComponentFactory> => {
  const aboutContent = await getEntryByLang("about", "about", lang);
  if (!aboutContent) return {};
  const { Content: HeroContent } = await render(aboutContent);
  return HeroContent;
};
