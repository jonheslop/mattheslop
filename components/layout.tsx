import React from 'react';
import Head from 'next/head';
import Nav from './nav';
import Footer from './footer';
import { photoSetForNav } from "../interfaces";

type Props = {
  pageTitle: string;
  layout?: string;
  photoSets?: photoSetForNav[];
  preview: boolean;
  children: React.ReactNode;
};

const Layout = ({pageTitle, layout = 'post', photoSets = [], preview, children}: Props) => {
  return (
    <div className="flex flex-col items-center justify-around min-h-screen">
      <Head>
        <title>{pageTitle} - Matt Heslop</title>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <meta name="description" content="Matt Heslop takes photos and lives in Berlin"/>
        <meta property="og:url" content="https://mattheslop.com/"/>
        <meta property="og:title" content="Matt Heslop"/>
        <meta property="og:description" content="Matt Heslop takes photos and lives in Berlin"/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="/holding.jpg"/>
      </Head>
      { preview &&
        <div className="bg-gray-200 w-full text-center py-2 text-xs font-medium">
          This is page is showing draft content.{" "}
          <a
            href="/api/exit-preview"
            className="underline hover:text-indigo-700 duration-200 transition-colors"
          >
            Click here
          </a>{" "}
          to exit preview mode.
        </div>
      }
      <div className={`flex-1 p-8 md:p-16 md:flex relative w-full`}>
        <Nav photoSets={photoSets}/>
        <main className="mt-16 md:mt-0">
          {children}
        </main>
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;
