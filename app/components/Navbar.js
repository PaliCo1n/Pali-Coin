"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gradient-pinki font-poppins text-white p-4 shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-4">
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
        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="hover:text-gray-600 font-medium transition-colors duration-200 font-poppins"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-gray-600 font-medium transition-colors duration-200 font-poppins"
          >
            About
          </Link>
          <Link
            href="/buy"
            className="transition-colors duration-200 font-medium hover:text-gray-600 font-poppins"
          >
            Buy PALI
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            ref={toggleButtonRef}
            onClick={() => setIsMenuOpen((prev) => !prev)}
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
        <div ref={menuRef} className="mt-2  md:hidden font-semibold">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="block py-2 px-4  text-white hover:bg-paliPink"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMenuOpen(false)}
            className="block py-2 px-4 text-white  hover:bg-paliPink"
          >
            About
          </Link>
          <Link
            href="/buy"
            onClick={() => setIsMenuOpen(false)}
            className="block py-2 px-4 text-white  hover:bg-paliPink"
          >
            Buy PALI
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
