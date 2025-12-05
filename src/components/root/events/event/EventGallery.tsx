import React from "react";

const EventGallery = () => {
  return (
    <section className="pb-32 space-y-24">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-[4/5] overflow-hidden bg-gray-100">
          <img
            src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1000"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            alt="Detail 1"
          />
        </div>
        <div className="aspect-[4/5] overflow-hidden bg-gray-100 mt-0 md:mt-24">
          <img
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1000"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            alt="Detail 2"
          />
        </div>
      </div>
      <div className="w-full h-[80vh] relative">
        <img
          src="https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=2000"
          className="w-full h-full object-cover"
          alt="Atmosphere Shot"
        />
        <div className="absolute bottom-10 left-10 text-white/80 font-sans text-xs uppercase tracking-widest">
          The Main Ballroom • 8:00 PM
        </div>
      </div>

      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="aspect-square bg-gray-100">
          <img
            src="https://images.unsplash.com/photo-1507504031981-723e911a0cd4?auto=format&fit=crop&q=80&w=800"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-square bg-gray-100">
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-square bg-gray-100">
          <img
            src="https://images.unsplash.com/photo-1520854221256-17451cc330e7?auto=format&fit=crop&q=80&w=800"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="col-span-1 md:col-span-3 text-center text-gray-500 italic font-serif mt-4">
          Hand-dyed silk napkins and custom botanical illustrations for the menu
          cards.
        </p>
      </div>
    </section>
  );
};

export default EventGallery;
