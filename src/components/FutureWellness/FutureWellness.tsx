"use client";
import Image from "next/image";
import React from "react";

const FutureWellness = () => {
  return (
    <div className="bg-[#ECFFDB] w-full flex flex-col lg:flex-row px-4 sm:px-8 lg:px-16 py-8 sm:py-12 lg:py-16 mt-10 sm:mt-16 lg:mt-20">
      <div className="w-full lg:w-1/2 flex flex-col gap-6 sm:gap-8 lg:gap-10 mb-8 lg:mb-0">
        <h1 className="text-[#35531C] text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight sm:leading-[50px] lg:leading-[60px]">
          The Future of Wellness Is Here
        </h1>
        <p className="font-light text-base sm:text-lg lg:text-xl leading-6 sm:leading-7 lg:leading-8">
          Sana brings together the best of technology and human expertise to
          create a seamless wellness experience that fits into your lifestyle.
        </p>
        <ul className="flex flex-col marker:text-[#35531C] list-outside list-disc text-black font-light text-base sm:text-lg lg:text-xl leading-8 sm:leading-9 lg:leading-10 pl-5">
          <li>Access to certified professionals across multiple disciplines</li>
          <li>Secure video consultations from the comfort of home</li>
          <li>Smart appointment reminders and follow-ups</li>
          <li>Medication tracking and refill notifications</li>
          <li>Integrated wellness tracking with insights</li>
        </ul>
        <button className="w-40 sm:w-48 lg:w-56 h-10 sm:h-12 lg:h-14 bg-[#35531C] rounded-full text-white text-lg sm:text-xl lg:text-2xl">
          Join Waitlist
        </button>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <Image
          height={300}
          width={300}
          alt="gif1"
          src="/gif1.gif"
          className="w-full max-w-[250px] sm:max-w-[300px] lg:max-w-[400px] h-auto"
        />
      </div>
    </div>
  );
};

export default FutureWellness;
