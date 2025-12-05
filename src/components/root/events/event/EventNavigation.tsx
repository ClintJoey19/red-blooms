import React from "react";

const EventNavigation = () => {
  return (
    <section className="w-full h-[50vh] relative group cursor-pointer overflow-hidden border-t border-white/20">
      <img
        src="https://images.unsplash.com/photo-1530103862676-de3c9da59af7?auto=format&fit=crop&q=80&w=2000"
        className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 bg-black"
      />
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
        <span className="font-sans text-xs uppercase tracking-widest mb-4 opacity-70">
          Next Project
        </span>
        <h2 className="font-serif text-5xl md:text-7xl group-hover:scale-110 transition-transform duration-700">
          Vogue Summer Soirée
        </h2>
        <span className="mt-8 text-accent text-3xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          Explore →
        </span>
      </div>
    </section>
  );
};

export default EventNavigation;
