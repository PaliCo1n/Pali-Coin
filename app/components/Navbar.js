"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-pinki font-poppins text-white p-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="PALI Coin Logo"
            width={30}
            height={30}
            className="mr-2"
          />
          <Link href="/" className="flex items-center text-2xl font-bold">
            <span className="text-2xl text-shadow-soft">
              <span className="text-paliGreen text-4xl">P</span>
              <span className="text-paliPinkDark">A</span>
              <span className="text-black">L</span>
              <span className="text-white">I</span>
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <Link
            href="/"
            className="mx-4 hover:text-gray-600 hover:font-semibold transition-colors duration-200 font-poppins"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="mx-4 hover:text-gray-600 hover:font-semibold transition-colors duration-200 font-poppins"
          >
            About
          </Link>
          <Link
            href="/buy"
            className="mx-4 transition-colors duration-200 hover:text-gray-600 hover:font-semibold font-poppins"
          >
            Buy PALI
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mt-2 bg-gradient-to-b from-paliPink to-paliGreen md:hidden">
          <Link
            href="/"
            className="block py-2 px-4 text-white hover:bg-pink-800"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block py-2 px-4 text-white hover:bg-pink-800"
          >
            About
          </Link>
          <Link
            href="/buy"
            className="block py-2 px-4 text-white hover:bg-pink-800"
          >
            Buy PALI
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
