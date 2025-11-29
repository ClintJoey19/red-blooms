import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    title: "Midnight in Paris",
    category: "Corporate Gala",
    location: "The Pierre, NYC",
    img: "/images/event-1.jpg",
  },
  {
    title: "Coastal Elegance",
    category: "Luxury Wedding",
    location: "Amalfi Coast, Italy",
    img: "/images/event-2.jpg",
  },
  {
    title: "Botanical Architecture",
    category: "Private Installation",
    location: "Kyoto, Japan",
    img: "/images/event-3.jpg",
  },
];

const SelectedWorks = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto">
        <div className="mb-20 border-b border-gray-200 pb-8">
          <span className="text-sm font-sans uppercase tracking-widest text-gray-400 mb-2">
            Portfolio
          </span>
          <h2 className="">Selected Works</h2>
        </div>
        <div className="flex flex-col gap-24">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`flex flex-col lg:flex-row gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:w-1/3 space-y-8">
                <div className="flex items-center gap-4 text-gray-400 text-sm tracking-widest uppercase">
                  <span>0{index + 1}</span>
                  <div className="w-12 h-[1px] bg-gray-400"></div>
                  <span>{project.category}</span>
                </div>

                <h3 className="text-gray-900 leading-tight">{project.title}</h3>

                <p className="text-muted-foreground font-light text-lg">
                  {project.location}
                </p>

                <div>
                  <Link
                    href="/"
                    className="group flex items-center gap-2 hover:gap-3 hover:text-accent underline transition-all"
                  >
                    View Case Study{" "}
                    <ArrowRight className="group-hover:text-accent size-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:w-2/3 w-full">
                <div className="relative w-full h-[500px] overflow-hidden rounded-sm group cursor-pointer">
                  <Image
                    src={project.img}
                    alt={project.title}
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    fill
                  />

                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;
