import renderHtml from 'html-react-parser';

export const parseToHtml = (body: string): string | JSX.Element | JSX.Element[] => {
  return renderHtml(body);
};
