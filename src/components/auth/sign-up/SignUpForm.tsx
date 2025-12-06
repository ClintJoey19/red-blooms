import React from "react";

const SignUpForm = () => {
  const accentBorder = "focus:border-accent"; // focus:border-[oklch(0.57_0.209_22.6524)]
  const accentBg = "bg-accent";

  return (
    <form className="space-y-8">
      {/* Name Input (Only shows on Sign Up) */}
      <div className="animate-fadeIn">
        <input
          type="text"
          placeholder="Full Name"
          className={`w-full border-b border-gray-300 py-3 text-gray-900 placeholder:text-gray-400 bg-transparent outline-none transition-colors duration-300 ${accentBorder}`}
        />
      </div>
      {/* Email Input */}
      <div>
        <input
          type="email"
          placeholder="Email Address"
          className={`w-full border-b border-gray-300 py-3 text-gray-900 placeholder:text-gray-400 bg-transparent outline-none transition-colors duration-300 ${accentBorder}`}
        />
      </div>

      {/* Password Input */}
      <div>
        <input
          type="password"
          placeholder="Password"
          className={`w-full border-b border-gray-300 py-3 text-gray-900 placeholder:text-gray-400 bg-transparent outline-none transition-colors duration-300 ${accentBorder}`}
        />
      </div>

      {/* Main Action Button */}
      <button
        className={`w-full ${accentBg} text-white py-4 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-black transition-all duration-500 shadow-lg mt-4`}
      >
        Register
      </button>

      {/* Divider */}
      <div className="relative flex items-center py-4">
        <div className="flex-grow border-t border-gray-200"></div>
        <span className="flex-shrink-0 mx-4 text-gray-300 text-xs font-serif italic">
          or
        </span>
        <div className="flex-grow border-t border-gray-200"></div>
      </div>

      {/* Google / Social Button */}
      <button className="w-full border border-gray-200 text-gray-600 py-4 rounded-full text-xs uppercase tracking-[0.2em] hover:border-gray-900 hover:text-gray-900 transition-all duration-300 flex justify-center items-center gap-2">
        {/* Simple Google G Icon placeholder */}
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z" />
        </svg>
        Continue with Google
      </button>
    </form>
  );
};

export default SignUpForm;
