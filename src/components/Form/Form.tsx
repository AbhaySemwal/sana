"use client";
import Image from "next/image";
import React from "react";

const Form = () => {
  const tags = [
    { id: 1, name: "Mental Health" },
    { id: 2, name: "Nutrition" },
    { id: 3, name: "Fitness" },
    { id: 4, name: "Alternative Fitness" },
    { id: 5, name: "Meditation" },
    { id: 6, name: "Sleep" },
  ];

  return (
    <div className="relative flex justify-center items-center py-8 sm:py-10 lg:py-12 px-4 sm:px-8 lg:px-12">
      <div className="w-full max-w-5xl flex flex-col lg:flex-row shadow-2xl rounded-3xl overflow-hidden">
        <div className="w-full lg:w-1/2 flex flex-col p-6 sm:p-8 lg:p-12 gap-6 sm:gap-8 lg:gap-10 bg-[#35531C] text-white">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight sm:leading-[40px] lg:leading-[60px] w-full max-w-md">
            Join the Sana Waitlist
          </h1>
          <p className="font-light text-base sm:text-lg lg:text-xl leading-6 sm:leading-7 lg:leading-8 w-full max-w-sm">
            Be among the first to experience the future of wellness care. Sign
            up to receive:
          </p>
          <ul className="list-disc pl-5 text-base sm:text-lg lg:text-xl font-light leading-6 sm:leading-7 lg:leading-8 w-full max-w-md flex flex-col gap-3 sm:gap-4">
            <li>Early access to the Sana platform</li>
            <li>Exclusive launch offers and discounts</li>
            <li>Invitation to our beta testing program</li>
            <li>Wellness resources and tips</li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2 bg-white p-6 sm:p-8 lg:p-12 flex flex-col gap-6 sm:gap-8">
          <form className="flex flex-col gap-4 sm:gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-base sm:text-lg lg:text-xl font-normal leading-6 sm:leading-7 lg:leading-8 flex items-start">
                First Name
                <span className="text-[8px] sm:text-[10px] text-red-500 relative -top-0.5 sm:-top-1">
                  *
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full max-w-sm h-12 sm:h-14 lg:h-16 border border-[#C8C8C8] rounded-xl px-4 sm:px-6 text-base sm:text-lg lg:text-xl font-normal leading-6 sm:leading-7 lg:leading-8 bg-[#F8F8F8] placeholder:text-gray-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-base sm:text-lg lg:text-xl font-normal leading-6 sm:leading-7 lg:leading-8 flex items-start">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="w-full max-w-sm h-12 sm:h-14 lg:h-16 border border-[#C8C8C8] rounded-xl px-4 sm:px-6 text-base sm:text-lg lg:text-xl font-normal leading-6 sm:leading-7 lg:leading-8 bg-[#F8F8F8] placeholder:text-gray-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-base sm:text-lg lg:text-xl font-normal leading-6 sm:leading-7 lg:leading-8 flex items-start">
                Email Address
                <span className="text-[8px] sm:text-[10px] text-red-500 relative -top-0.5 sm:-top-1">
                  *
                </span>
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full max-w-sm h-12 sm:h-14 lg:h-16 border border-[#C8C8C8] rounded-xl px-4 sm:px-6 text-base sm:text-lg lg:text-xl font-normal leading-6 sm:leading-7 lg:leading-8 bg-[#F8F8F8] placeholder:text-gray-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-base sm:text-lg lg:text-xl font-normal leading-6 sm:leading-7 lg:leading-8 flex items-start">
                Interests (Optional)
              </label>
              <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4">
                {tags.map((tag) => (
                  <button
                    key={tag.id}
                    type="button"
                    className="cursor-pointer focus:bg-gray-300 bg-[#F8F8F8] border border-[#C8C8C8] rounded-full py-1 px-3 sm:px-4 lg:px-5 text-xs sm:text-sm lg:text-base font-light leading-6 sm:leading-7 lg:leading-8 hover:bg-[#E0E0E0]"
                  >
                    {tag.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full flex flex-col gap-2 items-center justify-center mt-4 sm:mt-6">
              <button
                type="submit"
                className="w-full max-w-xs h-10 sm:h-12 lg:h-14 bg-[#35531C] text-white rounded-lg text-base sm:text-lg lg:text-xl font-medium leading-6 sm:leading-7 lg:leading-8 hover:bg-[#4A6B2A]"
              >
                Join Waitlist
              </button>
              <p className="text-xs sm:text-sm lg:text-base font-light leading-4 sm:leading-5 lg:leading-6 text-[#666666] text-center">
                By joining, you agree to our 
                <span className="text-[#36541D]">Terms of Service</span> and 
                <span className="text-[#36541D]">Privacy Policy</span>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="absolute bottom-0 z-10 -left-0 overflow-hidden hidden sm:block">
        <Image
          src="/leafleft.png"
          width={400}
          height={200}
          alt="leaf left"
          className="w-full h-auto max-w-[200px] sm:max-w-[300px] lg:max-w-[400px]"
        />
      </div>
      <div className="absolute bottom-0 -z-10 -right-0 overflow-hidden hidden sm:block">
        <Image
          src="/leafright.png"
          width={400}
          height={300}
          alt="leaf right"
          className="w-full h-auto max-w-[200px] sm:max-w-[300px] lg:max-w-[400px]"
        />
      </div>
    </div>
  );
};

export default Form;
