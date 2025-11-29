import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const ContactUs = () => {
  const accentColor = "focus:border-[oklch(0.57_0.209_22.6524)]";
  const btnBg = "bg-[oklch(0.57_0.209_22.6524)]";

  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row h-full min-h-screen">
        {/* COLUMN 1: The Form (Clean, Stationery Style) */}
        <div className="w-full lg:w-1/2 px-6 py-24 lg:p-24 flex flex-col justify-center">
          <div className="mb-12">
            <span className="text-xs font-sans tracking-[0.2em] text-gray-400 uppercase block mb-4">
              Inquiries
            </span>
            <h2 className="mb-6">Start the Conversation</h2>
            <p className="text-gray-500 font-light max-w-md">
              We take a limited number of commissions per year to ensure the
              highest level of detail for our clients.
            </p>
          </div>

          <form className="space-y-10 max-w-lg">
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="relative">
                <Input type="text" placeholder="Name" />
              </div>
              <div className="relative">
                <Input type="email" placeholder="Email" />
              </div>
            </div>

            {/* Event Type & Date Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="relative">
                {/* Custom Select styling is tricky, using simple here for clarity */}
                <select
                  className={`w-full border-b border-gray-300 py-4 text-gray-900 bg-transparent outline-none transition-colors duration-300 ${accentColor}`}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Event Type
                  </option>
                  <option value="wedding">Wedding</option>
                  <option value="gala">Corporate Gala</option>
                  <option value="private">Private Dinner</option>
                  <option value="brand">Brand Activation</option>
                </select>
              </div>
              <div className="relative">
                <Input type="date" placeholder="Event Date (Approx)" />
              </div>
            </div>

            {/* The Vision (Textarea) */}
            <div className="relative">
              <Textarea placeholder="Tell us about your vision..."></Textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                className={`${btnBg} text-white px-12 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-black transition-colors duration-500 shadow-xl`}
              >
                Send Inquiry
              </button>
            </div>
          </form>

          {/* Direct Contact Info (Small footer inside the form col) */}
          <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row gap-8 text-sm text-gray-500 font-sans">
            <div>
              <p className="uppercase tracking-widest text-xs text-black mb-2">
                Studio
              </p>
              <p>
                128 Design District
                <br />
                New York, NY 10013
              </p>
            </div>
            <div>
              <p className="uppercase tracking-widest text-xs text-black mb-2">
                Contact
              </p>
              <p>
                hello@brandname.com
                <br />
                +1 (212) 555-0199
              </p>
            </div>
          </div>
        </div>

        {/* COLUMN 2: The Mood Image */}
        <div className="w-full lg:w-1/2 h-[500px] lg:h-auto relative">
          <img
            src="/images/event-3.jpg"
            alt="Event Detail"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark Overlay for depth */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Optional: Quote overlay on image */}
          <div className="absolute bottom-20 left-10 md:left-20 max-w-sm text-white hidden lg:block">
            <p className="font-serif text-3xl italic leading-tight">
              "Design is the silent ambassador of your brand."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
