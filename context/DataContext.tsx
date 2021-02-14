import React, { createContext, useState } from 'react';

export const DataContext = createContext({});

export const ContextProvider = ({ children, github }): JSX.Element => {
  const [githubData, setGithubData] = useState(github);

  return (
    <DataContext.Provider value={{ githubData, setGithubData }}>
      {children}
    </DataContext.Provider>
  );
};
