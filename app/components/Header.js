// import Image from "next/image";
// import Link from "next/link";
// import ImageCarousel from "./Swiper";

// const Header = () => {
//   return (
//     <div>
//       {/* Header */}
//       <header className="bg-gradient-pinki py-20 font-poppins shadow-sm relative">
//         <div className="flex ml-8">
//           <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl shadow-soft">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r to-paliGreen from-sky-400">
//               Welcome to
//             </span>{" "}
//             <span className="text-paliGreen text-6xl">P</span>
//             <span className="text-4xl text-paliPinkDark">
//               A<span className="text-black">L</span>
//               <span className="text-white">I</span>
//             </span>{" "}
//           </h1>

//           <Image
//             src="/images/coin.png"
//             alt="PALI Coin Logo"
//             width={100}
//             height={100}
//             className="align-middle"
//           />
//         </div>

//         <div className="px-10 flex items-start">
//           <div className="flex flex-col">
//             <p className="text-3xl font-semibold font-poiret-one leading-relaxed mt-10 mb-10 text-left max-w-3xl bg-gradient-to-r from-gray-400 via-gray-600 to-gray-900 text-transparent bg-clip-text shadow-soft">
//               Empowering Palestinians Financial Ecosystem Through Blockchain
//               Worldwide
//             </p>
//             <p className="text-left max-w-3xl pr-7">
//               PALI Coin is more than just a cryptocurrency, it represents a
//               revolutionary step toward financial empowerment for Palestinians.
//               Built on the foundation of blockchain technology, it provides an
//               efficient, transparent, and secure solution to the unique
//               financial challenges faced by Palestinian communities, both within
//               occupied territories and across the global diaspora
//             </p>
//             <Link href="/info" className="text-left">
//               <button className="bg-gradient-to-r from-paliPink via-gray-400 to-paliGreen text-transparent bg-clip-text shadow-soft">
//                 Learn more...
//               </button>
//             </Link>
//             {/* PDF Link */}
//             <div className="text-center mt-10">
//               <a
//                 href="/pdf/PaliCoin.pdf"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="px-6 py-3 text-white bg-gradient-to-r from-paliPink via-gray-400 to-paliGreen rounded-md shadow-lg hover:shadow-xl"
//                 download
//               >
//                 Download Pali Coin (PDF){" "}
//                 <span className="text-3xl align-middle">🔻</span>
//               </a>
//             </div>
//           </div>

//           <div className="flex-shrink-0 w-1/2 mt-10">
//             <ImageCarousel />
//           </div>
//         </div>

//         {/* Image positioned at bottom-right */}
//         <div className="absolute bottom-0 right-0 m-4">
//           <Image
//             src="/images/coins.png"
//             alt="PALI Coin Logo"
//             width={150}
//             height={100}
//             className="align-middle"
//           />
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Header;

"use client";

import Image from "next/image";
import Link from "next/link";
import ImageCarousel from "./Swiper";

const Header = () => {
  return (
    <div>
      <header className="bg-gradient-pinki py-10 font-poppins shadow-sm relative">
        {/* Main Title and Logo */}
        <div className="flex flex-col md:flex-row items-center md:items-start ml-4 md:ml-8">
          <h1 className="mb-4 text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white lg:text-5xl shadow-soft text-center md:text-left">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-paliGreen from-sky-400">
              Welcome to
            </span>{" "}
            <span className="text-paliGreen text-4xl md:text-6xl">P</span>
            <span className="text-3xl md:text-4xl text-paliPinkDark">
              A<span className="text-black">L</span>
              <span className="text-white">I</span>
            </span>{" "}
          </h1>

          <Image
            src="/images/coin.png"
            alt="PALI Coin Logo"
            width={80}
            height={80}
            className="mt-4 md:mt-0 md:ml-4"
          />
        </div>

        {/* Content and Carousel */}
        <div className="px-4 md:px-10 flex flex-col md:flex-row items-center md:items-start">
          <div className="flex flex-col md:w-1/2">
            <p className="text-lg md:text-2xl font-semibold font-poiret-one leading-relaxed mt-6 mb-6 text-center md:text-left max-w-full bg-gradient-to-r from-gray-400 via-gray-600 to-gray-900 text-transparent bg-clip-text shadow-soft">
              Empowering Palestinians Financial Ecosystem Through Blockchain
              Worldwide
            </p>
            <p className="text-sm md:text-base text-center md:text-left max-w-full pr-0 md:pr-7">
              PALI Coin is more than just a cryptocurrency, it represents a
              revolutionary step toward financial empowerment for Palestinians.
              Built on the foundation of blockchain technology, it provides an
              efficient, transparent, and secure solution to the unique
              financial challenges faced by Palestinian communities, both within
              occupied territories and across the global diaspora
            </p>
            <Link href="/info" className="text-center md:text-left mt-4">
              <button className="bg-gradient-to-r from-paliPink via-gray-400 to-paliGreen text-transparent bg-clip-text shadow-soft">
                Learn more...
              </button>
            </Link>

            {/* PDF Link */}
            <div className="text-center md:text-left mt-8 md:mt-10">
              <a
                href="/pdf/PaliCoin-WhitePaper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-white bg-gradient-to-r from-paliPink via-gray-400 to-paliGreen rounded-md shadow-lg hover:shadow-xl md:px-4 md:py-2 md:text-lg sm:px-3 sm:py-1 sm:text-sm xs:px-3 xs:py-1 xs:text-xs"
                download
              >
                Download Pali Coin (PDF)
                <span className="text-2xl md:text-3xl align-middle xs:text-xs">
                  🔻
                </span>
              </a>
            </div>
          </div>

          <div className="mt-10 mb-10 md:mt-0 md:ml-8 w-full md:w-1/2">
            <ImageCarousel />
          </div>
        </div>

        {/* Image positioned at bottom-right */}
        <div className="absolute bottom-0 right-0 mt-12 mb-4 mr-0">
          <Image
            src="/images/coins.png"
            alt="PALI Coin Logo"
            width={150}
            height={100}
            className="align-middle"
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
