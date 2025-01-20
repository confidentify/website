import Head from 'next/head';
import React from 'react';
import HomePanel from '../app/home/panel';

export default function Home() {
  return (
    <>
      <Head>
        <title>conf·ident·ify</title>
        <link rel="icon" href="/logo.png" type="image/png" />
      </Head>
      <HomePanel />
    </>
  );
}
