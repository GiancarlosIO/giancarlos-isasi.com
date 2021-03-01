import * as React from 'react';
import Head from 'next/head';
import { isProduction } from '@/constants/env';

import Favicons from '@/components/Favicons';

import { ThemeProvider } from '@/theme';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        {isProduction && (
          <React.Fragment>
            <link
              rel="preconnect"
              href="https://www.google-analytics.com"
              crossOrigin="anonymous"
            />
            <link
              rel="preconnect"
              href="https://www.googletagmanager.com"
              crossOrigin="anonymous"
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-KDHPLNZ');`,
              }}
            />
          </React.Fragment>
        )}
        <title>Giancarlos Isasi (-N)</title>
        <meta
          name="description"
          content="Hi, I'm Giancarlos Isasi (Mr N), a Frontend engineer with experience in web performance optimización and javascript tooling."
        />
        <Favicons />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
