import React, { useEffect } from 'react';
import '../styles/main.css';
import type { AppProps } from 'next/app';

import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps): any {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
