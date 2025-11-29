import React from "react";
import RootNavbarLinks from "./RootNavbarLinks";
import SystemLogo from "@/components/system/SystemLogo";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const RootNavbar = () => {
  return (
    <section className="fixed top-0 w-full h-[10vh] z-100">
      <div className="h-full mx-auto container flex justify-center items-center px-4">
        <div className="h-full container bg-white/50 backdrop-blur-md border border-white/20 flex items-center justify-between gap-4 rounded-full shadow-md">
          <div>
            <SystemLogo />
          </div>
          <RootNavbarLinks />
          <div>
            <Button size="lg">
              Let's talk <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RootNavbar;
