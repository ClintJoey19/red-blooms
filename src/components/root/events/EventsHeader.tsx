import React from "react";

type EventsHeaderProps = {
  categories: string[];
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

const EventsHeader = ({ categories, filter, setFilter }: EventsHeaderProps) => {
  return (
    <div className="container mx-auto px-8 mb-20">
      <h2 className="mb-8">Selected Works</h2>
      <div className="flex flex-wrap gap-8 border-b border-gray-100 pb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`text-sm uppercase tracking-widest transition-colors duration-300 
                ${
                  filter === cat
                    ? "text-accent font-bold"
                    : "text-gray-400 hover:text-gray-900"
                }
              `}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EventsHeader;
