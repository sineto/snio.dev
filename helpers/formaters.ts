import ReactHtmlParser from 'html-react-parser';

export const stringToHtml = (text: string, tags: string[]) => {
  let words = text;
  tags.forEach((word: string) => {
    words = words.replace(word, `<span>${word}</span>`);
  });

  return ReactHtmlParser(words);
};