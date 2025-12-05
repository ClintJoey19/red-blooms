import EventGallery from "@/components/root/events/event/EventGallery";
import EventHeader from "@/components/root/events/event/EventHeader";
import EventHero from "@/components/root/events/event/EventHero";
import EventNavigation from "@/components/root/events/event/EventNavigation";
import React from "react";

type Props = {
  params: Promise<{
    eventId: string;
  }>;
};

const page = async ({ params }: Props) => {
  const { eventId } = await params;

  const project = {
    title: "The Vanderbilt Estate",
    subtitle: "A modern interpretation of Gilded Age luxury.",
    location: "Newport, Rhode Island",
    year: "2023",
    services: "Full Design, Floral Production, Lighting",
    credits: [
      { role: "Photography", name: "Jose Villa" },
      { role: "Venue", name: "The Breakers" },
      { role: "Catering", name: "Olivier Cheng" },
      { role: "Tent", name: "Greenwich Tent Co." },
    ],
    description:
      "The challenge was to take a historic space that feels heavy and museum-like and breathe youthful, ethereal energy into it. We juxtaposed the heavy gold molding of the ballroom with 5,000 stems of white delphinium and floating acrylic candelabras to create a sense of weightlessness.",
  };

  return (
    <div className="w-full bg-white">
      <EventHero />
      <EventHeader
        title={project.title}
        description={project.description}
        location={project.location}
        year={project.year}
        credits={project.credits}
      />
      <EventGallery />
      <EventNavigation />
    </div>
  );
};

export default page;
