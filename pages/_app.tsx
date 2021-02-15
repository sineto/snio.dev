import React from 'react';
import { AppProps } from 'next/app';
import getConfig from 'next/config';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import { ContextProvider } from '../context/DataContext';

import theme from '../styles/theme';
import GlobalStyle from '../styles/global';

interface AppDataProps extends AppProps {
  github: any;
}

const MyApp = ({ Component, pageProps, github }: AppDataProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&family=Roboto:wght@100;300;400;500;700;900&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <ContextProvider github={github.repositories}>
        <Component {...pageProps} />
      </ContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
};

const { publicRuntimeConfig } = getConfig();

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  const { data: github } = await axios.get(`${publicRuntimeConfig.API_URL}/github/repos`);

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps, github };
};

export default MyApp;
