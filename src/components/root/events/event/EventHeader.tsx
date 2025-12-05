import React from "react";

type Credit = {
  role: string;
  name: string;
};

type EventHeaderProps = {
  title: string;
  location: string;
  year: string;
  description: string;
  credits: Credit[];
};

const EventHeader = ({
  title,
  location,
  year,
  description,
  credits,
}: EventHeaderProps) => {
  return (
    <section className="py-24 container mx-auto px-8">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="lg:w-2/3">
          <h2 className="text-gray-900 mb-8 leading-tight">{title}</h2>
          <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-8">
            {location} • {year}
          </p>
          <p className="text-xl font-light text-gray-600 leading-relaxed max-w-2xl">
            <span className="text-accent font-serif text-3xl mr-2">"</span>
            {description}
            <span className="text-accent font-serif text-3xl mr-2">"</span>
          </p>
        </div>
        <div className="lg:w-1/3 border-t border-gray-200 pt-8 lg:border-t-0 lg:pt-0 lg:border-l lg:pl-12">
          <h4 className="mb-8">Project Credits</h4>
          <ul className="space-y-6">
            {credits.map((credit, idx) => (
              <li key={idx} className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                  {credit.role}
                </span>
                <span className="font-serif text-lg text-gray-900">
                  {credit.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EventHeader;
