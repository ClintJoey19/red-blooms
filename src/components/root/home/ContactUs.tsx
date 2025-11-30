import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import React from "react";

const ContactUs = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row h-full min-h-screen">
        <div className="w-full lg:w-1/2 py-32 flex flex-col justify-center">
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

          <form className="space-y-8 max-w-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <Input type="text" placeholder="Name" />
              </div>
              <div className="relative">
                <Input type="email" placeholder="Email" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="relative">
                <Input type="date" placeholder="Event Date (Approx)" />
              </div>
            </div>
            <div className="relative">
              <Textarea placeholder="Tell us about your vision..."></Textarea>
            </div>
            <div className="flex justify-end">
              <Button size="xl">
                Send Inquiries <Send />
              </Button>
            </div>
          </form>
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
        <div className="w-full lg:w-1/2 h-[500px] lg:h-auto relative">
          <img
            src="/images/event-3.jpg"
            alt="Event Detail"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
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
