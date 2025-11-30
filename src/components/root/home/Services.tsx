import React from "react";

const services = [
  {
    id: "01",
    title: "Full Design & Production",
    description:
      "From the initial mood board to the final light check. We handle concept creation, vendor curation, spatial planning, and on-site execution.",
    items: [
      "Concept Development",
      "Spatial Renderings",
      "Vendor Management",
      "Installation Oversight",
    ],
  },
  {
    id: "02",
    title: "Floral & Art Direction",
    description:
      "For clients who have the logistics covered but need the vision. We sculpt botanical installations and table-scapes that define the room's atmosphere.",
    items: [
      "Floral Design",
      "Table Styling",
      "Custom Fabrications",
      "Lighting Direction",
    ],
  },
  {
    id: "03",
    title: "Brand Experiential",
    description:
      "Translating brand identity into physical space. We design immersive launches and corporate galas that are Instagrammable by design.",
    items: [
      "Product Launches",
      "Influencer Dinners",
      "Set Design",
      "Photo Moments",
    ],
  },
];

const Services = () => {
  return (
    <section className="w-full bg-[#111111] py-32 text-white">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
          <h2>Our Expertise</h2>
          <p className="text-gray-400 max-w-md mt-4 md:mt-0 text-sm tracking-wide">
            We don't offer packages. We offer tailored design solutions for the
            world's most discerning hosts.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group border border-white/10 p-10 hover:bg-white/5 transition-all duration-500 cursor-default`}
            >
              <div className="text-sm text-gray-500 mb-8 tracking-widest">
                {service.id}
              </div>
              <h5 className={`mb-4 transition-colors group-hover:text-accent`}>
                {service.title}
              </h5>

              <p className="text-gray-400 font-light leading-relaxed mb-8">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-gray-500 flex items-center gap-2"
                  >
                    <span
                      className={`w-1.5 h-1.5 bg-accent rounded-full`}
                    ></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
