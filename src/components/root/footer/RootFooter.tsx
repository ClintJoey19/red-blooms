import Link from "next/link";
import React from "react";
import { rootNavbarLinks } from "../navbar/RootNavbarLinks";
import SystemCopyRights from "@/components/system/SystemCopyRights";

export const socials = [
  {
    label: "Facebook",
    href: "#",
  },
  {
    label: "Instagram",
    href: "#",
  },
  {
    label: "LinkedIn",
    href: "#",
  },
];

export const legals = [
  {
    label: "Privacy Policy",
    href: "#",
  },
  {
    label: "Terms of Service",
    href: "#",
  },
];

const footerLinks = [
  {
    label: "Explore",
    links: rootNavbarLinks,
  },
  {
    label: "Follow",
    links: socials,
  },
  {
    label: "Legal",
    links: legals,
  },
];

const RootFooter = () => {
  return (
    <footer className="w-full bg-[#050505] text-white pt-24 pb-10 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          {footerLinks.map(({ label, links }) => (
            <div key={label} className="space-y-6">
              <h4 className="text-xs font-sans uppercase tracking-widest text-gray-500">
                {label}
              </h4>
              <ul className="space-y-3 font-serif text-lg text-gray-300">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="hover:text-accent transition">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col justify-between items-start md:items-end">
            <button className="group flex items-center gap-2 text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
              Back to Top
              <span
                className={`transform -rotate-90 text-xl transition-colors duration-300 group-hover:text-accent`}
              >
                →
              </span>
            </button>
            <SystemCopyRights />
          </div>
        </div>
        <div className="flex items-center justify-center border-t border-white/10 pt-10">
          <h1>
            Red Blooms<span className="text-accent">.</span>
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default RootFooter;
