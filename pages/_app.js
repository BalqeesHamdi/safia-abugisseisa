import '../styles/globals.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Analytics />
      <Navigation/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp;
