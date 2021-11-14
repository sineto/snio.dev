import { useContext } from 'react';
import { SanityContext } from './../context/SanityContext';

export const usePageContent = (): any => {
  return useContext(SanityContext);
};
