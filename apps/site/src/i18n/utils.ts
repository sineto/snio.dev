import { defaultLang, ui } from "./ui";

export const getCurrentLanguage = (Astro: any): "pt-br" | "en" => {
  const lang = Astro.params.lang || Astro.currentLocale;
  return lang === "en" || lang === "pt-br" ? lang : "pt-br";
};

export const getLangFromUrl = (url: URL) => {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
};

export const useTranslations = (lang: keyof typeof ui) => {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
};

export const useTranslatedPath = (lang: keyof typeof ui) => {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  };
};
