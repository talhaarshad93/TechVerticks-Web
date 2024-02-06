import Header from '@/components/Header/Header'
import '@/styles/globals.css'
import '../styles/fonts.css';

import { useEffect } from 'react';
// import '../components/Header/header.css';
// import '../components/Footer/style.css';
import FooterCardDiv from '@/components/Footer/FooterCardDiv';
import Heading from '@/components/Heading Component/Heading';
export default function App({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .then((bootstrap) => {
        // Initialize Bootstrap components here
      })
      .catch((err) => {
        // Handle error while loading Bootstrap
        console.error('Error loading Bootstrap:', err);
      });
  }, []);

  return (
  <>
  <Header/>
    <Component {...pageProps} />
    
    <FooterCardDiv/>
  </>

  )
}
