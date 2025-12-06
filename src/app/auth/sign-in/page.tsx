import AuthFooter from "@/components/auth/AuthFooter";
import AuthHeader from "@/components/auth/AuthHeader";
import AuthHero from "@/components/auth/AuthHero";
import SignInForm from "@/components/auth/sign-in/SignInForm";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen w-full flex bg-white">
      <AuthHero
        title="Welcome back to the studio."
        description="Client Portal & Project Management"
        image="/images/event-1.jpg"
        imageAlt="Atmosphere"
      />

      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-8 lg:px-24 py-12 relative">
        <div className="absolute top-10 lg:top-14">
          <span className="font-serif text-2xl font-bold tracking-tighter">
            RB.
          </span>
        </div>

        <div className="w-full max-w-md">
          <AuthHeader
            title="Client Access"
            description="Please enter your details to view your project."
          />

          <SignInForm />

          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm font-light">
              New to the studio?
              <Link
                href="/auth/sign-up"
                className={`ml-2 font-serif italic text-lg text-accent border-b border-transparent hover:border-current transition-all`}
              >
                Inquire here.
              </Link>
            </p>
          </div>
        </div>

        <AuthFooter />
      </div>
    </div>
  );
};

export default page;
