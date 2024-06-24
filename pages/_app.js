import '../styles/globals.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer'
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
    <Navigation/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp;
