"use client";
import Head from "next/head";
import "@fortawesome/fontawesome-free/css/all.css";
import Header from "./components/Header";
import HomeInfoImages from "./components/HomeInfoImages";
import { useEffect } from "react";

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Head>
        <title>PALI Coin - The Trusted Palestinian Cryptocurrency</title>
        <meta
          name="description"
          content="PALI Coin is a decentralized digital currency built on the Polygon network for palestinians"
        />
        <meta property="og:title" content="PALI Coin" />
        <meta
          property="og:description"
          content="PALI Coin is a decentralized digital currency built on the Polygon network."
        />
        <meta property="og:image" content="path_to_image" />
      </Head>
      <div className="font-poppins text-center flex flex-col justify-between">
        {/* Header */}
        <Header />
        {/* PDF File */}
        <HomeInfoImages />
      </div>
    </>
  );
};

export default LandingPage;
