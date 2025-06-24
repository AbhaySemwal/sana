"use client";
import React from "react";

const ExperienceSana = () => {
  return (
    <div
      id="joinwaitlist"
      className="w-full bg-[#36541D] flex flex-col gap-6 sm:gap-8 lg:gap-10 justify-center items-center py-10 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-12"
    >
      <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight sm:leading-[40px] lg:leading-[60px] text-center">
        Be Among the First to Experience Sana
      </h1>
      <p className="text-white text-base sm:text-lg lg:text-2xl font-light leading-6 sm:leading-7 lg:leading-8 w-full max-w-3xl text-center">
        Join our exclusive waitlist and receive early access, special offers,
        and updates on our launch.
      </p>
      <button className="w-40 sm:w-48 lg:w-56 h-10 sm:h-12 lg:h-14 bg-white rounded-full text-[#36541D] text-lg sm:text-xl lg:text-2xl">
        Join Waitlist
      </button>
    </div>
  );
};

export default ExperienceSana;
