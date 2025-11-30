import AboutUs from "@/components/root/home/AboutUs";
import ContactUs from "@/components/root/home/ContactUs";
import Hero from "@/components/root/home/Hero";
import SelectedWorks from "@/components/root/home/SelectedWorks";
import Services from "@/components/root/home/Services";
import Testimonials from "@/components/root/home/Testimonials";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <SelectedWorks />
      <Services />
      <Testimonials />
      <ContactUs />
    </>
  );
};

export default page;
