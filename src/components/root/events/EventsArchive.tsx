import React from "react";

const archives = [
  { id: "1", name: "The Hearst Gala", loc: "San Simeon", year: "2021" },
  { id: "2", name: "Brooklyn Museum Dinner", loc: "New York", year: "2020" },
  { id: "3", name: "Private Estate Wedding", loc: "Tuscany", year: "2019" },
  {
    id: "4",
    name: "TechCrunch Disrupt Afterparty",
    loc: "San Francisco",
    year: "2019",
  },
];

const EventsArchive = () => {
  return (
    <section className="mt-40 container mx-auto px-8">
      <div className="border-t border-gray-200 pt-10">
        <h3 className="mb-10">Archive</h3>

        <div className="flex flex-col">
          {archives.map((item) => (
            <div
              key={item.id}
              className="group flex justify-between items-center py-6 border-b border-gray-100 hover:bg-gray-50 px-4 transition-colors cursor-pointer"
            >
              <h5 className="text-xl text-gray-600 group-hover:text-accent transition-colors">
                {item.name}
              </h5>
              <div className="flex gap-8 text-sm text-gray-400 tracking-widest">
                <span className="hidden md:block">{item.loc}</span>
                <span>{item.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsArchive;
