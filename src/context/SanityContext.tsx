import { createContext, ReactNode, useState, useEffect, useMemo } from 'react';
import { getPageHeader, getPageIntroduce, getPageSkills } from '../services/sanity';
import {
  SanityHeaderPage,
  SanityIntroducePage,
  SanityPageSettings,
  SanitySkillPage
} from '../types/sanity';

type SanityContextProps = {
  children: ReactNode;
};

export type SanityContextType = SanityPageSettings;

export const SanityContext = createContext<SanityContextType>({} as SanityContextType);

export const SanityProvider = ({ children }: SanityContextProps): JSX.Element => {
  const [header, setHeader] = useState<SanityHeaderPage>();
  const [introduce, setIntroduce] = useState<SanityIntroducePage>();
  const [skills, setSkills] = useState<SanitySkillPage[]>();

  useEffect(() => {
    getPageHeader()
      .then((data) => setHeader(data[0]))
      .catch((_error) => {});

    getPageIntroduce()
      .then((data) => setIntroduce(data[0]))
      .catch((_error) => {});

    getPageSkills()
      .then((data) => setSkills(data))
      .catch((_error) => {});
  }, []);

  const memoedValue = useMemo(
    () => ({ header, introduce, skills }),
    [header, introduce, skills]
  );
  return <SanityContext.Provider value={memoedValue}>{children}</SanityContext.Provider>;
};
