import Image from "next/image";
import Link from "next/link";
import React from "react";

const SystemLogo = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo.webp"
        alt="red-blooms-logo"
        height={70}
        width={70}
        className="object-center object-cover"
      />
    </Link>
  );
};

export default SystemLogo;
