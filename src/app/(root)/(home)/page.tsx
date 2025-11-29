import RootFooter from "@/components/root/footer/RootFooter";
import AboutUs from "@/components/root/home/AboutUs";
import ContactUs from "@/components/root/home/ContactUs";
import Hero from "@/components/root/home/Hero";
import SelectedWorks from "@/components/root/home/SelectedWorks";
import Services from "@/components/root/home/Services";
import Testimonials from "@/components/root/home/Testimonials";
import RootNavbar from "@/components/root/navbar/RootNavbar";
import React from "react";

const page = () => {
  return (
    <main className="w-full flex flex-col gap-24 justify-center">
      <RootNavbar />
      <Hero />
      <AboutUs />
      <SelectedWorks />
      <Services />
      <Testimonials />
      <ContactUs />
      <RootFooter />
    </main>
  );
};

export default page;
