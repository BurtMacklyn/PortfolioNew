import Motion from 'src/components/Motion/Layout';
import Head from 'next/head';
import React from 'react';
import Error from 'pages/404';

export default function Layout(): JSX.Element {
  return (
    <Motion>
      <Head>
        <title>Cooper Runyan | Experience</title>
      </Head>
      <Error />
    </Motion>
  );
}
