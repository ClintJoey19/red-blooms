import Image from "next/image";
import React from "react";

type AuthHeroProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

const AuthHero = ({ title, description, image, imageAlt }: AuthHeroProps) => {
  return (
    <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-black">
      <Image
        src={image}
        alt={imageAlt}
        className="absolute inset-0 object-cover opacity-80 transition-opacity duration-1000"
        fill
      />
      <div className="absolute bottom-20 left-20 text-white z-10 max-w-md">
        <h2 className="font-serif text-5xl mb-4 leading-tight">{title}</h2>
        <p className="font-sans text-xs uppercase tracking-widest opacity-70">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AuthHero;
