import React from "react";
import { ArrowRight, Calendar, MapPin } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "The Vanderbilt Wedding",
    date: "Oct 12, 2024",
    location: "Newport, RI",
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1519225469034-0295dec197fe?auto=format&fit=crop&q=80&w=1000",
    progress: 75,
  },
  {
    id: 2,
    name: "Summer Estate Gala",
    date: "Aug 15, 2025",
    location: "The Hamptons, NY",
    status: "Concept",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
    progress: 15,
  },
  {
    id: 3,
    name: "Vogue Launch Party",
    date: "Dec 05, 2023",
    location: "SoHo, NYC",
    status: "Archived",
    image:
      "https://images.unsplash.com/photo-1530103862676-de3c9da59af7?auto=format&fit=crop&q=80&w=1000",
    progress: 100,
  },
];

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8 lg:p-16">
      {/* Header */}
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="font-serif text-4xl text-gray-900 mb-2">
            My Projects
          </h1>
          <p className="text-gray-500">
            Manage your active events and view archives.
          </p>
        </div>
        <button className="bg-black text-white px-6 py-3 rounded-full text-xs uppercase tracking-widest hover:bg-accent transition-colors shadow-lg">
          + New Inquiry
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 cursor-pointer"
          >
            {/* Image Header */}
            <div className="h-48 relative overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4">
                <span
                  className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-medium backdrop-blur-md
                  ${
                    project.status === "Active"
                      ? "bg-white/90 text-accent"
                      : project.status === "Archived"
                      ? "bg-gray-900/80 text-white"
                      : "bg-yellow-100/90 text-yellow-700"
                  }`}
                >
                  {project.status}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-serif text-xl text-gray-900 mb-4 group-hover:text-accent transition-colors">
                {project.name}
              </h3>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <Calendar size={16} />
                  <span>{project.date}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <MapPin size={16} />
                  <span>{project.location}</span>
                </div>
              </div>

              {/* Progress Bar (Only for active/concept) */}
              {project.status !== "Archived" && (
                <div className="w-full bg-gray-100 h-1.5 rounded-full mb-6 overflow-hidden">
                  <div
                    className="h-full bg-accent"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              )}

              {/* Action */}
              <div className="flex items-center justify-between border-t border-gray-50 pt-4">
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Open Dashboard
                </span>
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-accent group-hover:text-white transition-colors">
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Create New Card (Empty State) */}
        <div className="border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center p-6 text-center hover:border-accent hover:bg-accent/5 transition-colors cursor-pointer group">
          <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 mb-4 group-hover:text-accent group-hover:bg-white transition-colors">
            <span className="text-3xl font-light">+</span>
          </div>
          <h3 className="font-serif text-lg text-gray-900 mb-2">
            Start New Project
          </h3>
          <p className="text-sm text-gray-400">
            Request a proposal for a new event
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
