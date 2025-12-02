import React from "react";

const Ateliers = () => {
  return (
    <section className="py-32 px-6 lg:px-20 container mx-auto">
      <div className="text-center mb-20">
        <h2 className="font-serif text-4xl mb-4">The Atelier</h2>
        <p className="text-gray-500 font-light">
          The artisans behind the curtain.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Team Member 1 */}
        <div className="group cursor-pointer">
          <div className="overflow-hidden mb-4 bg-gray-100 aspect-[3/4]">
            <img
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=800"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Team Member"
            />
          </div>
          <h3 className="font-serif text-xl">Julia M.</h3>
          <p className="text-xs uppercase tracking-widest text-gray-400 mt-1 group-hover:text-accent transition-colors">
            Lead Planner
          </p>
        </div>

        {/* Team Member 2 */}
        <div className="group cursor-pointer">
          <div className="overflow-hidden mb-4 bg-gray-100 aspect-[3/4]">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Team Member"
            />
          </div>
          <h3 className="font-serif text-xl">David K.</h3>
          <p className="text-xs uppercase tracking-widest text-gray-400 mt-1 group-hover:text-accent transition-colors">
            Technical Director
          </p>
        </div>

        {/* Team Member 3 */}
        <div className="group cursor-pointer">
          <div className="overflow-hidden mb-4 bg-gray-100 aspect-[3/4]">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Team Member"
            />
          </div>
          <h3 className="font-serif text-xl">Elena R.</h3>
          <p className="text-xs uppercase tracking-widest text-gray-400 mt-1 group-hover:text-accent transition-colors">
            Floral Designer
          </p>
        </div>

        {/* Team Member 4 - Join Us */}
        <div className="group flex flex-col items-center justify-center border border-gray-200 aspect-[3/4] hover:border-gray-400 transition-colors cursor-pointer">
          {/* Updated to use text-accent */}
          <span className="text-4xl font-serif mb-2 text-accent">+</span>
          <h3 className="font-serif text-xl">Join Us</h3>
          <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">
            View Openings
          </p>
        </div>
      </div>
    </section>
  );
};

export default Ateliers;
