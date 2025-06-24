"use client";
import React from "react";
import Card from "../Card/Card";

const expectationItems = [
  {
    id: 1,
    title: "One-Screen Consults",
    description:
      "HD video, real-time notes, and secure chat in a single view—no extra tabs, no copy-paste.",
    icon: "/onescreen.png",
    dimensions: 46,
  },
  {
    id: 2,
    title: "Effortless Scheduling",
    description:
      "One calendar for both sides—clients book in seconds, pros get auto-synced slots, reminders, and zero double-bookings.",
    icon: "/el.png",
    dimensions: 48,
  },
  {
    id: 3,
    title: "Practice Dashboard",
    description:
      "Daily schedule, invoices, and client files all under one roof—cuts admin time by 25%.",
    icon: "/practice.png",
    dimensions: 48,
  },
  {
    id: 4,
    title: "Personal Companion",
    description:
      "Five-second mood & symptom check-ins unlock bite-size insights that keep clients on track between visits.",
    icon: "/personal.png",
    dimensions: 55,
  },
  {
    id: 5,
    title: "Remedy Marketplace",
    description:
      "Order practitioner-approved herbs and supplements with auto-refill and doorstep delivery—right inside the app.",
    icon: "/cart.png",
    dimensions: 52,
  },
  {
    id: 6,
    title: "Privacy & Compliance",
    description:
      "End-to-end encryption plus GDPR/HIPAA safeguards. Your data, your rules.",
    icon: "/shield.png",
    dimensions: 48,
  },
];

const WhatToExpect = () => {
  return (
    <div
      id="features"
      className="w-full max-w-7xl mt-10 sm:mt-16 lg:mt-20 mx-auto flex flex-col gap-8 sm:gap-12 lg:gap-14 px-1 sm:px-8 lg:px-12"
    >
      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 items-center">
        <h1 className="text-[#36541D] w-full max-w-xl text-center font-medium text-4xl sm:text-5xl lg:text-6xl leading-tight sm:leading-[48px] lg:leading-[60px]">
          What to Expect
        </h1>
        <p className="w-full max-w-2xl text-center font-light text-base sm:text-lg lg:text-xl leading-6 sm:leading-7 lg:leading-8">
          SANA streamlines holistic care for clients and professionals so every
          session, message, and milestone lives in one place.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {expectationItems.map((item) => (
          <Card
            key={item.id}
            icon={item.icon}
            title={item.title}
            description={item.description}
            dimensions={item.dimensions}
          />
        ))}
      </div>
    </div>
  );
};

export default WhatToExpect;
