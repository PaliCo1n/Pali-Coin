"use client";

import Image from "next/image";
import React from "react";

const HomeInfoImages = () => {
  return (
    <div className="space-y-6">
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
      <div className="relative h-[500px] sm:h-[800px] md:h-[1000px] lg:h-[1671px]">
        <Image
          src="/images/0.jpg"
          alt="PALI Coin Logo"
          fill
          sizes="100vw"
          className="object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

export default HomeInfoImages;
