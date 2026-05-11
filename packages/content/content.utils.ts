import { getCollection, getEntry } from "astro:content";

export type Lang = "pt-br" | "en";
export type Collection = "metadata" | "about" | "experiences" | "projects" | "repositories";

export const getCollectionByLang = async (collection: Collection, lang: Lang) => {
  const items = await getCollection(collection, (entry) => {
    // Filter by language folder: "pt-br/job.md" or "en/job.md"
    return entry.id.startsWith(`${lang}/`);
  });

  return items;
}

export const getEntryByLang = async (collection: Collection, slug: string, lang: Lang) => {
  return getEntry(collection, `${lang}/${slug}`);
}