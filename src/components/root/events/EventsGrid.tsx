import Image from "next/image";
import Link from "next/link";
import React from "react";

type Event = {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  layout: string;
};

type EventsGridProps = {
  projects: Event[];
};

const EventsGrid = ({ projects }: EventsGridProps) => {
  return (
    <div className="container mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/events/${project.id}`}
            className={`group cursor-pointer ${
              project.layout === "full" ? "md:col-span-2" : "md:col-span-1"
            }`}
          >
            <div
              className={`relative overflow-hidden bg-gray-100 mb-6 ${
                project.layout === "full" ? "aspect-[21/9]" : "aspect-[4/5]"
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                fill
              />
              <div className="absolute inset-0 border-[10px] border-white/0 transition-all duration-500 group-hover:border-[20px] group-hover:border-white/10 group-hover:bg-black/10"></div>
            </div>
            <div className="flex justify-between items-end border-b border-transparent group-hover:border-gray-200 pb-4 transition-colors duration-500">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs uppercase tracking-widest text-gray-400">
                    {project.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-accent"></span>
                  <span className="text-xs uppercase tracking-widest text-gray-400">
                    {project.year}
                  </span>
                </div>
                <h4 className="text-gray-900 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h4>
              </div>

              <div className="hidden md:block text-right">
                <span className="text-sm text-gray-400 font-light block">
                  {project.location}
                </span>
                <span className="text-accent opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 inline-block text-xl">
                  →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsGrid;
