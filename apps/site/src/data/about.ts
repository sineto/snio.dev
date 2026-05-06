import { getCollection, getEntry, render, type CollectionEntry } from "astro:content";

export interface Card {
  title: string;
  iconName: string;
  tldr: string;
}

export interface AboutCard {
  type: Card[];
  stack: string[];
  content: string;
}

export const about: AboutCard = (await getCollection("about"))
  .map((about: CollectionEntry<"about">) => ({
    type: [
      about.data.backend,
      about.data.frontend,
      about.data.infra,
    ],
    stack: about.data.stack,
    content: about.rendered?.html ?? ""
}))[0];

const aboutContent = await getEntry("about", "about");
export const { Content: AboutContent } = await render(aboutContent);

