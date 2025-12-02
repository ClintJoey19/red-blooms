import AboutUsHero from "@/components/root/about/AboutUsHero";
import Ateliers from "@/components/root/about/Ateliers";
import FounderLetter from "@/components/root/about/FounderLetter";
import Philosophy from "@/components/root/about/Philosophy";
import React from "react";

const page = () => {
  return (
    <div className="w-full bg-white">
      <AboutUsHero />
      <FounderLetter />
      <Philosophy />
      <Ateliers />
    </div>
  );
};

export default page;
