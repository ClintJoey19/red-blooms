import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <section className="relative w-full py-32 bg-[#FDFBF7] flex items-center justify-center overflow-hidden">
      {/* Background Decor (Subtle floral watermark) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <Image
          src="/images/event-2.jpg"
          className="object-cover grayscale"
          alt="Background Texture"
          fill
        />
      </div>

      <div className="container mx-auto px-6 lg:px-20 text-center relative z-10">
        {/* Star Rating using the Accent Color */}
        <div className="flex justify-center gap-1 mb-8 text-[oklch(0.57_0.209_22.6524)]">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-xl">
              ★
            </span>
          ))}
        </div>

        <blockquote className="font-serif text-3xl md:text-5xl text-gray-900 leading-tight md:leading-snug max-w-4xl mx-auto mb-10">
          "They didn't just design our wedding; they captured our essence.
          Walking into that room felt like walking into a dream we never wanted
          to wake up from."
        </blockquote>

        <div className="font-sans tracking-widest uppercase text-sm text-gray-500">
          — Julianne & Marcus,{" "}
          <span className="text-[oklch(0.57_0.209_22.6524)] font-bold opacity-80">
            Vogue Magazine Feature, 2023
          </span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
