import '../styles/main.css';
import type { AppProps } from 'next/app';
import { AuthProvider } from '../hooks/useAuth';

import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps): any {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AuthProvider>
        <NavBar />
        <div className="pt__main_container md:container bg-white mx-auto p-0 m-0">
          <Component {...pageProps} />
        </div>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default MyApp;
