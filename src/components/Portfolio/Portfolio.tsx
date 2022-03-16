import { NextSeo } from 'next-seo';
import Head from 'next/head';
import type { ReactChild } from 'react';
import { useUrl } from '~/hooks';
import style from './Portfolio.module.scss';

export function Portfolio({ children }: { children?: ReactChild | ReactChild[] }) {
  const url = useUrl();

  return (
    <>
      {url && (
        <>
          <NextSeo
            title="Cooper Runyan"
            description="Professional marketing and portfolio website for Cooper Runyan"
            canonical={url}
            openGraph={{
              url,
              type: 'website',
              locale: 'en_US',
              title: 'Portfolio',
              description: "Main overview page of Cooper Runyan's portfolio",
              images: [
                {
                  url: `${url}/imgs/site/banner.png`,
                  alt: 'Cooper Runyan Banner',
                  type: 'image/png',
                },
                {
                  url: `${url}/imgs/site/profile.png`,
                  alt: 'Cooper Runyan Profile Picture',
                  type: 'image/png',
                },
              ],
              site_name: url,
            }}
            twitter={{
              handle: '@CooperRunyan1',
            }}
          />

          <Head>
            <meta name="description" content="A marketing and about site for web designer and developer, Cooper Runyan" />
            <title>Portfolio</title>
          </Head>

          <div className={style.Portfolio}>{children}</div>
        </>
      )}
    </>
  );
}
