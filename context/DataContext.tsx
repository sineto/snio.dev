import React, { createContext, useState } from 'react';
import { Repository } from '../utils/types';

export interface DataContextProps {
  githubData: Repository[];
  setGithubData: (data: Repository) => void;
}

const dataContextDefault: DataContextProps = {
  githubData: [],
  setGithubData: () => {}
};

export const DataContext = createContext<DataContextProps>(dataContextDefault);

export const ContextProvider = ({ children, github }): JSX.Element => {
  const [githubData, setGithubData] = useState(github);

  return (
    <DataContext.Provider value={{ githubData, setGithubData }}>
      {children}
    </DataContext.Provider>
  );
};
