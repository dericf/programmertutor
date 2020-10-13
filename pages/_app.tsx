import '../styles/main.css';
import type { AppProps } from 'next/app';
import { AuthProvider } from '../hooks/useAuth';

import NavBar from 'components/NavBar';

function MyApp({ Component, pageProps }: AppProps): any {
  return (
    <AuthProvider>
      <NavBar />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
