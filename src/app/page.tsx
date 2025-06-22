import { Rasa } from "next/font/google";
import Wellness from "@/components/Wellness/Wellness";
import WhatToExpect from "@/components/WhatToExpect/WhatToExpect";
import Navbar from "@/components/Navbar/Navbar";
import FutureWellness from "@/components/FutureWellness/FutureWellness";
import Testimonial from "@/components/Testimonial/Testimonial";
import ExperienceSana from "@/components/ExperienceSana/ExperienceSana";
import Footer from "@/components/Footer/Footer";

const rasa = Rasa({
  variable: "--font-rasa",
  subsets: ["latin", "gujarati"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <div className={rasa.variable}>
      <Navbar />
      <Wellness />
      <WhatToExpect />
      <FutureWellness />
      <Testimonial />
      <ExperienceSana />
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}
