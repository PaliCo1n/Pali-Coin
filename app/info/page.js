// app/info/page.js
import Image from "next/image";
import React from "react";

const InfoPage = () => {
  return (
    <div className="px-10 py-20">
      <h1 className="text-4xl font-semibold font-poiret-one text-center mb-8 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-900 text-transparent bg-clip-text shadow-soft">
        About PALI Coin
      </h1>
      <p className="text-left max-w-5xl mx-auto mb-6 leading-relaxed text-gray-700">
        PALI Coin is a groundbreaking cryptocurrency dedicated to empowering the
        Palestinian financial ecosystem. Leveraging the power of blockchain
        technology, PALI Coin provides transparency, security, and efficiency to
        address the unique challenges faced by Palestinian communities globally.
      </p>
      <p className="text-left max-w-5xl mx-auto leading-relaxed text-gray-700">
        Our mission is to foster financial inclusion, innovation, and
        empowerment, bridging gaps in traditional banking systems and providing
        accessible solutions for individuals and businesses within occupied
        territories and the global diaspora.
      </p>{" "}
      <p className="text-left max-w-5xl mx-auto leading-relaxed text-gray-700 mb-8">
        Download our comprehensive brochure to learn more about our mission,
        goals, and how PALI Coin is making an impact worldwide.
      </p>
      <div className="space-y-10 relative">
        <div className="relative h-[400px] sm:h-[600px] md:h-[800px] lg:h-[1200px]">
          <Image
            src="/images/presentation9.png"
            alt="PALI Coin Logo"
            fill
            sizes="100vw"
            className="object-contain rounded-lg"
          />
        </div>
        <div className="relative h-[400px] sm:h-[600px] md:h-[800px] lg:h-[1200px]">
          <Image
            src="/images/presentation8.png"
            alt="PALI Coin Logo"
            fill
            sizes="100vw"
            className="object-contain rounded-lg"
          />
        </div>
        <div className="relative h-[400px] sm:h-[600px] md:h-[800px] lg:h-[1200px]">
          <Image
            src="/images/presentation6.png"
            alt="PALI Coin Logo"
            fill
            sizes="100vw"
            className="object-contain rounded-lg"
          />
        </div>
        <div className="relative h-[400px] sm:h-[600px] md:h-[800px] lg:h-[1200px]">
          <Image
            src="/images/presentation1.png"
            alt="PALI Coin Logo"
            fill
            sizes="100vw"
            className="object-contain rounded-lg"
          />
        </div>
        <div className="relative h-[400px] sm:h-[600px] md:h-[800px] lg:h-[1200px]">
          <Image
            src="/images/presentation2.png"
            alt="PALI Coin Logo"
            fill
            sizes="100vw"
            className="object-contain rounded-lg"
          />
        </div>
        <div className="relative h-[400px] sm:h-[600px] md:h-[800px] lg:h-[1200px]">
          <Image
            src="/images/presentation3.png"
            alt="PALI Coin Logo"
            fill
            sizes="100vw"
            className="object-contain rounded-lg"
          />
        </div>
        <div className="relative h-[400px] sm:h-[600px] md:h-[800px] lg:h-[1200px]">
          <Image
            src="/images/presentation4.png"
            alt="PALI Coin Logo"
            fill
            sizes="100vw"
            className="object-contain rounded-lg"
          />
        </div>
        <div className="relative h-[400px] sm:h-[600px] md:h-[800px] lg:h-[1200px]">
          <Image
            src="/images/presentation5.png"
            alt="PALI Coin Logo"
            fill
            sizes="100vw"
            className="object-contain rounded-lg"
          />
        </div>
        <div className="relative h-[400px] sm:h-[600px] md:h-[800px] lg:h-[1200px]">
          <Image
            src="/images/presentation7.png"
            alt="PALI Coin Logo"
            fill
            sizes="100vw"
            className="object-contain rounded-lg"
          />
        </div>
      </div>
      {/* PDF Link */}
      <div className="text-center mt-10">
        <a
          href="/pdf/PaliCoin-WhitePaper.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 text-white bg-gradient-to-r from-paliPink via-gray-400 to-paliGreen rounded-md shadow-lg hover:shadow-xl"
          download
        >
          Download Pali Coin (PDF){" "}
          <span className="text-3xl align-middle">🔻</span>
        </a>
      </div>
    </div>
  );
};

export default InfoPage;
