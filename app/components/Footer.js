// import Link from "next/link";
// import Image from "next/image";

// const Footer = () => {
//   return (
//     <footer className="text-sm text-gray-600 bg-gradient-pali p-5">
//       {/* Center Content */}
//       <div className="flex items-center justify-center space-x-4">
//         {/* Left Image */}
//         <div className="flex-shrink-0">
//           <Image src="/images/17.png" alt="Left Logo" width={80} height={80} />
//         </div>
//         {/* Footer Links */}
//         <div className="text-center font-poppins flex flex-col items-center">
//           <p>
//             © 2024 PALI Coin. All rights reserved for
//             <span className="text-green-950"> dev Mohamed Ali</span>
//           </p>
//           <div className="mt-4 font-poppins flex justify-center space-x-4">
//             <a
//               href="https://github.com/devMoAli"
//               className="text-orange-300 font-semibold hover:text-indigo-800"
//             >
//               <i className="fab fa-github"></i> GitHub
//             </a>
//             <a
//               href="#"
//               className="font-semibold text-gray-600 hover:text-indigo-800"
//             >
//               <i className="fab fa-twitter"></i> Twitter
//             </a>
//             <a
//               href="#"
//               className="font-semibold text-indigo-800 hover:text-indigo-800"
//             >
//               <i className="fab fa-facebook"></i> Facebook
//             </a>
//             <a
//               href="https://www.tiktok.com/@pali.coin"
//               className="font-semibold text-pink-400 hover:text-indigo-800"
//             >
//               <i className="fab fa-tiktok"></i> TikTok
//             </a>
//             <a
//               href="mailto:dev.mohamed.ali1@gmail.com"
//               className="font-semibold text-green-600 hover:text-indigo-800"
//             >
//               <i className="fas fa-envelope"></i> Mail
//             </a>
//           </div>
//         </div>
//         {/* Right Image */}
//         <div className="flex-shrink-0">
//           <Image src="/images/4.png" alt="Right Logo" width={100} height={40} />
//         </div>
//         <div>
//           <Link
//             href="/privacy"
//             className="mx-4 text-gray-400 hover:text-gray-600 hover:font-semibold transition-colors duration-200 font-poppins"
//             style={{ display: "inline-block", minWidth: "60px" }}
//           >
//             Privacy Policy
//           </Link>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="text-sm text-gray-600 bg-gradient-pali p-4 sm:p-5 px-4 sm:px-6 xs:px-6">
      {" "}
      <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-8 xs:px-6">
        {/* Left Image */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/images/17.png"
              alt="Left Logo"
              width={80}
              height={80}
            />
          </Link>
        </div>

        {/* Footer Links */}
        <div className="text-center font-poppins">
          <p>
            © 2024 PALI Coin. All rights reserved for{" "}
            <span className="text-gray-300">dev Mohamed Ali</span>
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a
              href="https://github.com/devMoAli"
              className="text-orange-300 font-semibold hover:text-indigo-800"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
            <a
              href="#"
              className="font-semibold text-gray-600 hover:text-indigo-800"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a
              href="#"
              className="font-semibold text-indigo-800 hover:text-indigo-800"
            >
              <i className="fab fa-facebook"></i> Facebook
            </a>
            <a
              href="https://www.tiktok.com/@pali.coin"
              className="font-semibold text-pink-400 hover:text-indigo-800"
            >
              <i className="fab fa-tiktok"></i> TikTok
            </a>
            <a
              href="mailto:dev.mohamed.ali1@gmail.com"
              className="font-semibold text-green-600 hover:text-indigo-800"
            >
              <i className="fas fa-envelope"></i> Mail
            </a>
          </div>
          <div className="mt-4">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-gray-600 hover:font-semibold transition-colors duration-200 font-poppins"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0">
          <Image src="/images/4.png" alt="Right Logo" width={100} height={40} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
