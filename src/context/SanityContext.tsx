import axios from 'axios';
import { createContext, ReactNode, useState, useEffect, useMemo } from 'react';
import {
  getPageHeader,
  getPageIntroduce,
  getPageSkills,
  getPageSocialProfile
} from '../services/sanity';
import {
  SanityHeaderPage,
  SanityIntroducePage,
  SanityPageSettings,
  SanitySkillPage,
  SanitySocialProfilePage
} from '../types/sanity';
import { GithubRepository } from '../types/global';

type SanityContextProps = {
  children: ReactNode;
};

export type SanityContextType = SanityPageSettings;

export const SanityContext = createContext<SanityContextType>({} as SanityContextType);

export const SanityProvider = ({ children }: SanityContextProps): JSX.Element => {
  const [header, setHeader] = useState<SanityHeaderPage>();
  const [introduce, setIntroduce] = useState<SanityIntroducePage>();
  const [skills, setSkills] = useState<SanitySkillPage[]>();
  const [githubRepositories, setGithubRepositories] = useState<GithubRepository[]>();
  const [socialProfile, setSocialProfile] = useState<SanitySocialProfilePage>();

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

    axios
      .get(`${process.env.API_URL}/api/github/get-repositories`)
      .then(({ data }) => setGithubRepositories(data.repositories))
      .catch((_error) => {});

    getPageSocialProfile()
      .then((data) => setSocialProfile(data[0]))
      .catch((_error) => {});
  }, []);

  const memoedValue = useMemo(
    () => ({ header, introduce, skills, githubRepositories, socialProfile }),
    [header, introduce, skills, githubRepositories, socialProfile]
  );
  return <SanityContext.Provider value={memoedValue}>{children}</SanityContext.Provider>;
};
