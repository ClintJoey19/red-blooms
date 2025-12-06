import React from "react";

type AuthHeaderProps = {
  title: string;
  description: string;
};

const AuthHeader = ({ title, description }: AuthHeaderProps) => {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-400 font-light text-sm">{description}</p>
    </div>
  );
};

export default AuthHeader;
