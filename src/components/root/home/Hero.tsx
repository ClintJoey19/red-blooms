import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="container-xl mx-auto h-screen bg-[url(/images/hero-bg.jpg)] bg-cover bg-left relative flex flex-col justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFF5EE] via-[#FFF5EE]/10 via-15% to-transparent"></div>
        <div className="container mx-auto z-5">
          <div className="w-[600px] flex flex-col gap-8">
            <h1>Your Story, Designed</h1>
            <p className="text-xl text-muted-foreground max-w-sm leading-relaxed">
              We curate environments where every detail whispers your name.
            </p>
            <div className="flex gap-4">
              <Button size="xl">
                Let's talk <ArrowRight />
              </Button>
              <Button size="xl" variant="secondary">
                Explore events <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
