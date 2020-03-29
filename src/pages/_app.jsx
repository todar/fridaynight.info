/**
 * This is a custom app replacing the default one from Next.
 * Using this to persit layout and state throughout the app.
 */
import React from "react";
import "../styles.css";
import Layout from "../components/layout";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1e1f20" />
        <meta name="msapplication-TileColor" content="#1e1f20" />
        <meta name="theme-color" content="#1e1f20" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
};

export default App;
