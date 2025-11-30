import SectionLabel from "@/components/system/SectionLabel";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section className="relative w-full bg-[#FDFBF7] overflow-hidden">
      <div className="container mx-auto max-lg:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative z-10">
            <SectionLabel>Behind the designs</SectionLabel>

            <h2 className="text-gray-900 leading-tight mb-8">
              We don't just plan events. <br />
              <span className="italic text-muted-foreground">
                We sculpt moments.
              </span>
            </h2>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light">
              <p>
                True luxury lies in the unseen details. It’s the way the light
                hits the crystal at sunset, the texture of the linen, and the
                scent that greets guests as they arrive.
              </p>
              <p>
                With a background in interior architecture and fine art, we
                approach every event as a blank canvas. Our philosophy is
                simple: perfection is not an accident; it is a design choice.
              </p>
            </div>

            <div className="mt-12">
              <p className="font-serif italic text-3xl text-gray-800">
                Red Blooms
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-10 -right-10 w-full h-full bg-[#E8E0D5] rounded-xl -z-10 hidden lg:block"></div>

            <div className="relative h-[600px] w-full overflow-hidden shadow-2xl">
              <Image
                src="/images/event-planner.jpg"
                alt="Event planner"
                className=" object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                fill
              />
            </div>

            <div className="absolute -bottom-8 -left-8 bg-accent p-6 shadow-xl rounded-xl border border-gray-100 hidden lg:block">
              <p className="text-4xl text-white font-serif">10+</p>
              <p className="text-xs uppercase tracking-widest text-white mt-1">
                Years of Design
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
