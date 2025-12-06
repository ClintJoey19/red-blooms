import AuthFooter from "@/components/auth/AuthFooter";
import AuthHeader from "@/components/auth/AuthHeader";
import AuthHero from "@/components/auth/AuthHero";
import SignUpForm from "@/components/auth/sign-up/SignUpForm";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen w-full flex bg-white">
      <AuthHero
        image="/images/event-2.jpg"
        imageAlt="Atmosphere"
        title="Begin your design journey."
        description="Client Portal & Project Management"
      />

      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-8 lg:px-24 py-12 relative">
        <div className="absolute top-10 lg:top-14">
          <span className="font-serif text-2xl font-bold tracking-tighter">
            RB.
          </span>
        </div>

        <div className="w-full max-w-md">
          <AuthHeader
            title="Create Account"
            description="Join us to curate your wishlist and view proposals."
          />

          <SignUpForm />

          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm font-light">
              Already have an account?
              <Link
                href="/auth/sign-in"
                className={`ml-2 font-serif italic text-lg text-accent border-b border-transparent hover:border-current transition-all`}
              >
                Sign In.
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
