import React from "react";

const methodologies = [
  {
    title: "Sensory Architecture",
    desc: "Visuals are only the beginning. We design for sound, scent, and touch to create a multi-sensory immersion.",
  },
  {
    title: "Radical Personalization",
    desc: "We reject trends. We dig deep into your personal narrative to create details that could only belong to you.",
  },
  {
    title: "Effortless Flow",
    desc: "The best design is invisible. We plan the logistics so tightly that the evening feels like a natural, spontaneous unfolding.",
  },
];

const Philosophy = () => {
  return (
    <section className="py-32 bg-[#111111] text-white">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
          <h2>Our Methodology</h2>
          <p className="text-gray-500 text-sm tracking-widest uppercase mt-4 md:mt-0">
            Form • Function • Feeling
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {methodologies.map((item, i) => (
            <div key={i} className="group">
              <div className="text-6xl font-serif mb-6 opacity-50 group-hover:opacity-100 transition-opacity text-accent">
                0{i + 1}
              </div>
              <h3 className="text-2xl font-serif mb-4 text-white">
                {item.title}
              </h3>
              <p className="text-gray-400 font-light leading-relaxed max-w-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
