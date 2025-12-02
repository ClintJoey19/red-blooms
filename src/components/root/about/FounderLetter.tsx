import Image from "next/image";
import React from "react";

const FounderLetter = () => {
  return (
    <section className="py-24 container mx-auto">
      <div className="flex flex-col lg:flex-row gap-20 items-start">
        <div className="w-full lg:w-1/2 relative">
          <div className="aspect-[3/4] overflow-hidden bg-gray-100">
            <Image
              src="/images/event-planner-2.jpg"
              alt="Founder Portrait"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              fill
            />
          </div>
          <p className="mt-4 font-sans text-xs uppercase tracking-widest text-gray-500 text-right">
            Anna R., Principal Designer
          </p>
        </div>

        <div className="w-full lg:w-1/2 lg:pt-10">
          <h3 className="mb-10">The Art of the Unspoken</h3>

          <div className="text-gray-600 text-lg font-light leading-relaxed space-y-6">
            <p>
              <span className="float-left text-7xl font-serif leading-[0.8] pr-4 pt-2 text-accent">
                D
              </span>
              esign has always been my language. Long before I began
              coordinating timelines, I was obsessed with how a space makes you{" "}
              <em>feel</em>. I realized early on that the difference between a
              "party" and an "experience" isn't the budget—it's the intention.
            </p>
            <p>
              We founded this studio to bridge the gap between architectural
              discipline and wild, organic beauty. We don't just fill tables
              with flowers; we study the lines of the venue, the fall of the
              light, and the flow of the crowd.
            </p>
            <p>
              Our clients come to us not because they want someone to pick out
              napkins, but because they want to build a temporary world that
              tells their story.
            </p>
          </div>

          <div className="mt-12 font-serif text-3xl italic text-accent">
            Redge
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderLetter;
