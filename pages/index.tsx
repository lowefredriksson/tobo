import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import App from "./App";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tobo</title>
        <meta name="description" content="Tobobobobo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App />
    </>
  );
};

export default Home;
