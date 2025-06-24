"use client";
import Image from "next/image";
import React from "react";

const wellnessImages = [
  {
    id: 1,
    src: "/image1.png",
    alt: "Wellness Image 1",
    border: "border-[#35531C]",
  },
  {
    id: 2,
    src: "/image2.png",
    alt: "Wellness Image 2",
    border: "border-transparent bg-[#EBFFDA]",
  },
  {
    id: 3,
    src: "/image3.png",
    alt: "Wellness Image 3",
    border: "border-[#9FB770]",
  },
  {
    id: 4,
    src: "/image4.png",
    alt: "Wellness Image 4",
    border: "border-[#9FB770]",
  },
  {
    id: 5,
    src: "/image5.png",
    alt: "Wellness Image 5",
    border: "border-[#35531C]",
  },
  {
    id: 6,
    src: "/image6.png",
    alt: "Wellness Image 6",
    border: "border-transparent bg-[#EBFFDA]",
  },
];

const Wellness = () => {
  return (
    <div className="relative flex flex-col items-center gap-8 sm:gap-12 mt-5 px-4 sm:px-8 lg:px-12 overflow-hidden">
      <div className="w-full max-w-2xl">
        <h1 className="font-medium text-3xl sm:text-4xl lg:text-5xl text-center leading-tight sm:leading-[50px] lg:leading-[60px]">
          Your <span className="text-[#35531C]">Wellness</span> Companion for
          Mind & Body
        </h1>
      </div>
      <div className="w-full max-w-xl">
        <p className="text-center text-base sm:text-lg lg:text-xl leading-6 sm:leading-7 font-light">
          Sana connects you with wellness professionals, simplifies appointment
          booking, and delivers prescribed medications to your doorstep.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 w-full max-w-6xl">
        {wellnessImages.map((image) => (
          <div
            key={image.id}
            className={`w-full h-40 sm:h-48 lg:h-56 border-4 rounded-lg ${image.border}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-5 text-lg sm:text-xl lg:text-2xl">
        <button className="w-40 sm:w-48 lg:w-56 h-10 sm:h-12 lg:h-14 bg-[#35531C] rounded-full text-white">
          Join Waitlist
        </button>
        <button className="w-40 sm:w-48 lg:w-56 h-10 sm:h-12 lg:h-14 border-2 border-[#35531C] rounded-full text-black">
          Learn More
        </button>
      </div>
      <div className="absolute bottom-30 -left-0 -z-10 overflow-hidden hidden sm:block">
        <Image
          src="/leafleft.png"
          width={300}
          height={150}
          alt="leaf left"
          className="w-full h-auto max-w-[200px] sm:max-w-[300px] lg:max-w-[400px]"
        />
      </div>
      <div className="absolute bottom-30 -right-0 -z-10 overflow-hidden hidden sm:block">
        <Image
          src="/leafright.png"
          width={350}
          height={250}
          alt="leaf right"
          className="w-full h-auto max-w-[250px] sm:max-w-[350px] lg:max-w-[450px]"
        />
      </div>{" "}
      <div className="w-screen h-20 sm:h-24 lg:h-32 bg-[#35531C] overflow-hidden flex items-center">
        <div className="flex items-center animate-scroll whitespace-nowrap">
          {["ms.png", "cnm.png", "aws.png", "psb.png"].map((src, idx) => (
            <Image
              key={idx}
              src={`/${src}`}
              width={150}
              height={60}
              alt={src.split(".")[0]}
              className="mx-4 sm:mx-6 lg:mx-8 h-12 sm:h-16 lg:h-20 w-auto"
            />
          ))}
          {["ms.png", "cnm.png", "aws.png", "psb.png"].map((src, idx) => (
            <Image
              key={idx + 4}
              src={`/${src}`}
              width={150}
              height={60}
              alt={src.split(".")[0]}
              className="mx-4 sm:mx-6 lg:mx-8 h-12 sm:h-16 lg:h-20 w-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wellness;
