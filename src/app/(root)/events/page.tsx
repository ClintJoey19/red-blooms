"use client";
import EventsArchive from "@/components/root/events/EventsArchive";
import EventsGrid from "@/components/root/events/EventsGrid";
import EventsHeader from "@/components/root/events/EventsHeader";
import ContactUs from "@/components/root/home/ContactUs";
import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "The Vanderbilt Estate",
    category: "Wedding",
    location: "Newport, RI",
    year: "2023",
    image: "/images/event-1.jpg",
    layout: "full", // Takes up full width
  },
  {
    id: 2,
    title: "Midnight Flora",
    category: "Gala",
    location: "The Met, NYC",
    year: "2024",
    image: "/images/event-2.jpg",
    layout: "half", // Standard vertical
  },
  {
    id: 3,
    title: "Golden Hour",
    category: "Private Dinner",
    location: "Amalfi, Italy",
    year: "2023",
    image: "/images/event-planner.jpg",
    layout: "half",
  },
  {
    id: 4,
    title: "Vogue Summer Soirée",
    category: "Brand Activation",
    location: "Hamptons, NY",
    year: "2022",
    image: "/images/event-3.jpg",
    layout: "full",
  },
  {
    id: 5,
    title: "Winter Solstice",
    category: "Wedding",
    location: "Aspen, CO",
    year: "2023",
    image: "/images/event-planner-2.jpg",
    layout: "half",
  },
  {
    id: 6,
    title: "Chanel Launch",
    category: "Brand Activation",
    location: "Paris, France",
    year: "2024",
    image: "/images/hero-bg.jpg",
    layout: "half",
  },
];

const categories = [
  "All",
  "Wedding",
  "Gala",
  "Brand Activation",
  "Private Dinner",
];

const page = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="w-full pt-32 pb-20">
      <EventsHeader
        categories={categories}
        filter={filter}
        setFilter={setFilter}
      />
      <EventsGrid projects={filteredProjects} />
      <EventsArchive />
      <ContactUs />
    </div>
  );
};

export default page;
