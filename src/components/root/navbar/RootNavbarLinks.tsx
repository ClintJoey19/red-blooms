import Link from "next/link";
import React from "react";

export const rootNavbarLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about-us",
  },
  {
    label: "Events",
    href: "/events",
  },
  {
    label: "Contact",
    href: "/contact-us",
  },
];

const RootNavbarLinks = () => {
  return (
    <nav className="flex justify-center items-center gap-20">
      {rootNavbarLinks.map(({ label, href }) => (
        <Link
          key={label}
          href={href}
          className="font-medium hover:text-accent transition"
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default RootNavbarLinks;
