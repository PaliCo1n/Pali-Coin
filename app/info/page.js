// app/info/page.js
import Image from "next/image";
import React from "react";

const InfoPage = () => {
  return (
    <div className="px-10 py-10">
      <div className="flex flex-col items-center justify-center">
        {/* Title and Image Section */}
        <div className="flex items-center justify-center mb-4">
          <p className="text-4xl font-semibold font-poiret-one text-center bg-gradient-to-r from-gray-400 via-gray-600 to-gray-900 text-transparent bg-clip-text">
            About PALI Coin
          </p>

          {/* Image Section */}
          <div className="flex h-[60px] sm:h-[80px] md:h-[100px] relative w-[60px] sm:w-[80px] md:w-[100px]">
            <Image
              src="/images/coinP.png"
              alt="PALI Coin Logo"
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <p className="text-left max-w-5xl mx-auto mb-6 leading-relaxed text-gray-700">
        PALI Coin is a groundbreaking cryptocurrency dedicated to empowering the
        Palestinian financial ecosystem. Leveraging the power of blockchain
        technology, PALI Coin provides transparency, security, and efficiency to
        address the unique challenges faced by Palestinian communities.
      </p>

      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mt-8">
          Empowering Palestinian&apos;s Community
        </h1>
      </div>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold font-poiret-one text-center text-pali-teal-dark mt-8">
          Mission & Goals{" "}
          <div className="h-[120px] sm:h-[150px] md:h-[200px] relative">
            <Image
              src="/images/goal1.png"
              alt="PALI Coin Logo"
              fill
              sizes="100vw"
              className="object-contain rounded-lg"
            />
          </div>
        </h2>

        {/* Goal List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="bg-transparent p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold font-poiret-one text-center bg-gradient-to-r from-gray-600 via-gray-600 to-gray-900 text-transparent bg-clip-text mb-4">
                {goal.title}
              </h3>
              <p>{goal.description}</p>
            </div>
          ))}
        </div>
      </div>
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
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <Image
            src="/images/presentation1.png"
            alt="PALI Coin Logo"
            fill
            sizes="100vw"
            className="object-contain rounded-lg"
          />
        </div>
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <Image
            src="/images/presentation2.png"
            alt="PALI Coin Logo"
            fill
            sizes="100vw"
            className="object-contain rounded-lg"
          />
        </div>
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <Image
            src="/images/presentation3.png"
            alt="PALI Coin Logo"
            fill
            sizes="100vw"
            className="object-contain rounded-lg"
          />
        </div>
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <Image
            src="/images/presentation4.png"
            alt="PALI Coin Logo"
            fill
            sizes="100vw"
            className="object-contain rounded-lg"
          />
        </div>
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <Image
            src="/images/presentation5.png"
            alt="PALI Coin Logo"
            fill
            sizes="100vw"
            className="object-contain rounded-lg"
          />
        </div>
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px]">
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
          className="px-6 py-3 text-white bg-gradient-to-r from-paliPink via-gray-400 to-paliGreen rounded-md "
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

// Array of goals
const goals = [
  {
    title: "Community Empowerment",
    description:
      "To create a decentralized token that empowers Palestinians globally, providing financial inclusion and participation in the crypto economy.",
  },
  {
    title: "Supporting Palestinian Causes",
    description:
      "A portion of each transaction will support humanitarian projects that benefit Palestinian refugees, healthcare, and education.",
  },
  {
    title: "Building a Palestinian Ecosystem",
    description:
      "Fostering a decentralized ecosystem of Palestinian businesses and individuals to transact using the Palestinian token.",
  },
  {
    title: "Social Impact and Charity",
    description:
      "Fund charitable causes in Palestine, focusing on rebuilding infrastructure, supporting schools, and medical initiatives.",
  },
  {
    title: "Education and Awareness",
    description:
      "Raise global awareness about Palestinian culture and history through NFT campaigns and educational initiatives.",
  },
  {
    title: "Tokenomics for Sustainability",
    description:
      "Design a sustainable tokenomics model to ensure long-term growth and prevent inflation of the Palestinian token.",
  },
  {
    title: "Partnerships and Global Recognition",
    description:
      "Form partnerships with exchanges, platforms, and charitable organizations to amplify the token's impact and reach globally.",
  },
  {
    title: "Creating Job Opportunities",
    description:
      "Enable Palestinians to join the blockchain ecosystem by offering job opportunities in development, entrepreneurship, and content creation.",
  },
  {
    title: "Peace and Unity",
    description:
      "Promote peace, unity, and collaboration between different communities through the Palestinian token, symbolizing hope and progress.",
  },
];
