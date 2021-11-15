import React from 'react';
import { AppProps } from 'next/app';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import { SanityProvider } from '../src/context/SanityContext';

import theme from '../src/styles/theme';
import GlobalStyle from '../src/styles/global';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&family=Roboto:wght@100;300;400;500;700;900&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <SanityProvider>
        <Component {...pageProps} />
      </SanityProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
