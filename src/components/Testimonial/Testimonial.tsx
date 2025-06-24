"use client";
import React from "react";

const testimonialItems = [
  {
    id: 1,
    name: "Emma R.",
    role: "Yoga Instructor",
    testimonial:
      "Sana has transformed how I approach my wellness journey. The integrated approach makes everything so much easier.",
    image: "/emma.jpg",
  },
  {
    id: 2,
    name: "Michael T.",
    role: "Tech Executive",
    testimonial:
      "Being able to consult with specialists and get my prescriptions all in one place has been a game-changer for me.",
    image: "/michael.png",
  },
  {
    id: 3,
    name: "Sarah K.",
    role: "Marathon Runner",
    testimonial:
      "The personalized wellness plan provided through Sana helped me achieve my health goals faster than I imagined possible.",
    image: "/sarah.png",
  },
];

const Testimonial = () => {
  return (
    <div className="bg-[#FAFAFA] py-10 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12">
      <h1 className="text-[#35531C] font-medium text-3xl sm:text-4xl lg:text-5xl leading-tight sm:leading-[40px] lg:leading-[60px] text-center mb-8 sm:mb-12 lg:mb-16">
        What Our Early Users Say
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
        {testimonialItems.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 sm:p-6 lg:p-8 shadow-lg rounded-3xl flex flex-col justify-between gap-4 sm:gap-6 lg:gap-8 w-full"
          >
            <div className="flex items-center justify-start">
              <img
                src="/comma.png"
                alt="comma"
                className="w-5 h-3 sm:w-6 sm:h-4 lg:w-7 lg:h-4"
              />
            </div>
            <p className="font-normal text-sm sm:text-base lg:text-lg leading-5 sm:leading-6 lg:leading-7">
              {item.testimonial}
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full object-cover"
              />
              <div>
                <h3 className="text-sm sm:text-base lg:text-lg text-[#36541D] font-normal">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base font-normal">
                  {item.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
