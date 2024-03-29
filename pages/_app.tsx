import * as React from 'react';
import Head from 'next/head';

import { AppProps, AppInitialProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import NProgress from 'nprogress';
import { useRouter } from 'next/router';

import { isProduction } from '@/constants/env';

import Favicons from '@/components/Favicons';

import { Footer } from '@/components';

import { ThemeProvider } from '@/theme';

import '../styles/globals.css';

interface CustomAppProps extends AppProps {
  pageProps: { hideFooter?: boolean; children: React.ReactNode };
}

const MyApp: React.FC<CustomAppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  React.useEffect(() => {
    const handleStart = () => {
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

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
        <Favicons />
      </Head>
      <div className="bg-blue-light dark:bg-blue-darker text-gray-800 dark:text-white">
        <Component {...pageProps} />
        {!pageProps.hideFooter && <Footer />}
      </div>
    </ThemeProvider>
  );
};

export default appWithTranslation(MyApp);
