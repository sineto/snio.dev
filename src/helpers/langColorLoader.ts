interface LangColor {
  lang: string;
  color: string;
}

/**
 * colors based on:
 * https://github.com/github/linguist/blob/master/lib/linguist/languages.yml
 */
const colors: LangColor[] = [
  { lang: 'TypeScript', color: '#2b7489' },
  { lang: 'JavaScript', color: '#f1e05a' },
  { lang: 'HTML', color: '#e34c26' },
  { lang: 'CSS', color: '#563d7c' },
  { lang: 'Shell', color: '#89e051' },
  { lang: 'Vim script', color: '#199f4b' },
  { lang: 'Makefile', color: '#427819' },
  { lang: 'Go', color: '#00ADD8' }
];

const langColorLoader = (lang: string): string => {
  return colors.find((color: LangColor) => color.lang === lang).color;
};

export default langColorLoader;
