"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const NavbarJoinW = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-black px-4 sm:px-10 py-5 font-normal">
      <div className="flex justify-between items-center">
        <div className="w-auto">
          <Image
            alt="sana"
            height={50}
            width={130}
            src="/sana.png"
            className="w-auto h-auto"
          />
        </div>
        {/* Hamburger Button for Mobile */}
        <button
          className="sm:hidden flex items-center justify-center w-10 h-10 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-8">
          <span className="text-lg sm:text-2xl">Home</span>
          <Link
            href="#joinwaitlist"
            className="bg-[#35531C] rounded-full w-40 sm:w-56 h-10 sm:h-12 text-white text-lg sm:text-xl flex justify-center items-center"
          >
            Join Waitlist
          </Link>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`sm:hidden flex flex-col items-center gap-4 mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <span className="text-lg">Home</span>
        <Link
          href="#joinwaitlist"
          className="bg-[#35531C] rounded-full w-40 h-10 text-white text-lg flex justify-center items-center"
        >
          Join Waitlist
        </Link>
      </div>
    </nav>
  );
};

export default NavbarJoinW;
