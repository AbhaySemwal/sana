"use client";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-8 sm:gap-12 lg:gap-16 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mt-8 sm:mt-10 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col w-full">
          <Image
            height={60}
            width={150}
            alt="sana"
            src="/sana.png"
            className="w-auto h-auto relative -left-12"
          />
          <p className="font-normal text-sm sm:text-base lg:text-lg text-[#666666] leading-6 sm:leading-7 lg:leading-8">
            Empowering you with tools and resources for a healthier, happier
            life. SANA is here to support your journey every step of the way.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 w-full">
          <h1 className="font-semibold text-lg sm:text-xl lg:text-2xl leading-6 sm:leading-7 lg:leading-8">
            Navigation
          </h1>
          <ul className="flex flex-col gap-2 sm:gap-3 font-normal text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 lg:leading-8 text-[#666666]">
            <li>Home</li>
            <li>What is Sana</li>
            <li>Professionals</li>
            <li>Clients</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 w-full">
          <h1 className="font-[600] text-lg sm:text-[xl] lg:text-2xl leading-6 sm:leading-7 lg:leading-8">
            Legal Information
          </h1>
          <ul className="flex flex-col gap-2 sm:gap-3 font-normal text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 lg:leading-8 text-[#666666]">
            <li>Privacy</li>
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 w-full">
          <h1 className="font-semibold text-lg sm:text-xl lg:text-2xl leading-6 sm:leading-7 lg:leading-8">
            Social Links
          </h1>
          <div className="flex gap-2 sm:gap-3 lg:gap-4">
            {["fb.png", "ig.png", "x.png", "linkedin.png"].map((src, idx) => (
              <Image
                key={idx}
                height={40}
                width={40}
                alt={src.split(".")[0]}
                src={`/${src}`}
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
              />
            ))}
          </div>
          <div className="flex flex-col gap-2 text-[#666666]">
            <h1 className="font-normal text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 lg:leading-8">
              Contact Us
            </h1>
            <h1 className="font-normal text-xs sm:text-sm lg:text-base leading-5 sm:leading-6">
              hello@mysana.io
            </h1>
          </div>
        </div>
      </div>
      <div className="h-12 sm:h-14 lg:h-16 bg-[#36541D] w-full text-white flex items-center justify-center text-sm sm:text-base lg:text-lg">
        © 2025 Copyright | All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
