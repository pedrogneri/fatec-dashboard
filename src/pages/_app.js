import React from 'react';

import Head from 'next/head';
import PropTypes from 'prop-types';
import { GlobalStyle } from 'styles.js';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default App;
