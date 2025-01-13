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
          content="Empowering Palestinians Financial Ecosystem Through Blockchain Worldwide"
        />
        <meta property="og:title" content="PALI Coin" />
        <meta
          property="og:description"
          content="Empowering Palestinians Financial Ecosystem Through Blockchain Worldwide"
        />
        <meta property="og:image" content="/favicon/icon.png" />

        {/* <!-- Favicon for browsers --> */}
        <link rel="icon" href="/favicon/favicon.ico" type="image/x-icon" />

        {/* <!-- Scalable vector icon --> */}
        <link rel="icon" href="/favicon/icon.svg" type="image/svg+xml" />

        {/* <!-- Apple Touch Icon --> */}
        <link rel="apple-touch-icon" href="/favicon/apple-icon.png" />

        {/* <!-- General-purpose PNG Icon --> */}
        <link rel="icon" sizes="192x192" href="/favicon/icon.png" />
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
