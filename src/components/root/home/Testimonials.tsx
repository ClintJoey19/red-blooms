import SectionLabel from "@/components/system/SectionLabel";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <section className="relative w-full py-32 bg-[#FDFBF7] flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <Image
          src="/images/event-2.jpg"
          className="object-cover grayscale"
          alt="Background Texture"
          fill
        />
      </div>

      <div className="container mx-auto px-6 lg:px-20 text-center relative z-10">
        <div className="flex justify-center gap-1 mb-8 text-accent">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-xl">
              &#9733;
            </span>
          ))}
        </div>

        <blockquote className="font-serif text-3xl md:text-5xl text-gray-900 leading-tight md:leading-snug max-w-4xl mx-auto mb-10">
          "They didn't just design our wedding; they captured our essence.
          Walking into that room felt like walking into a dream we never wanted
          to wake up from."
        </blockquote>

        <SectionLabel>
          — Julianne & Marcus,{" "}
          <span className="text-accent font-bold opacity-80">
            Vogue Magazine Feature, 2023
          </span>
        </SectionLabel>
      </div>
    </section>
  );
};

export default Testimonials;
