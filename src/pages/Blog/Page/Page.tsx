import Head from 'next/head';
import { Portfolio, Markdown, Back, Nav, Footer } from '~/components';
import style from './Page.module.scss';

export function Page({ content }: { content: string }) {
  return (
    <Portfolio>
      <Head>
        <title>Blog</title>
      </Head>
      <Nav />
      <div className={style.blog}>
        <div className={style.back}>
          <Back color="black" />
        </div>
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </Portfolio>
  );
}
