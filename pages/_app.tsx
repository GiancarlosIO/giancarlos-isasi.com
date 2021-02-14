import * as React from 'react';
import Head from 'next/head';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Mr. -N</title>
        <meta
          name="description"
          content="Hi, I'm Giancarlos Isasi (Mr N), a Frontend engineer with experience in web performance optimización and javascript tooling."
        />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
