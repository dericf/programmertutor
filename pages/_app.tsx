import React, { useEffect } from 'react';
import '../styles/main.css';
import type { AppProps } from 'next/app';

import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps): any {
  return (
    <>
      <Head>
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
