import ReactHtmlParser from 'html-react-parser';

export const parseToHtmlWithTags = (
  text: string,
  tags: string[]
): string | JSX.Element | JSX.Element[] => {
  let words = text;
  tags.forEach((word: string) => {
    words = words.replace(word, `<span>${word}</span>`);
  });

  return ReactHtmlParser(words);
};

export const parseToHtml = (body: string): string | JSX.Element | JSX.Element[] => {
  return ReactHtmlParser(body);
};
