import { groq } from 'next-sanity';
import { createContext, ReactNode, useState, useEffect, useMemo } from 'react';
import { getHeader } from '../services/sanity';
import { SanityHeaderPage, SanityPageSettings } from '../types/sanity';

type SanityContextProps = {
  children: ReactNode;
};

export type SanityContextType = SanityPageSettings;

export const SanityContext = createContext<SanityContextType>({} as SanityContextType);

export const SanityProvider = ({ children }: SanityContextProps): JSX.Element => {
  const [header, setHeader] = useState<SanityHeaderPage>();

  const query = groq`
    *[_type == "header" && !(_id in path("drafts.**"))]{
      headerBadge,
      headerTitle,
      headerSubTitle
    }
  `;

  useEffect(() => {
    getHeader(query)
      .then((data) => setHeader(data[0]))
      .catch((_error) => {});
  }, []);

  const memoedValue = useMemo(() => ({ header }), [header]);
  return <SanityContext.Provider value={memoedValue}>{children}</SanityContext.Provider>;
};
