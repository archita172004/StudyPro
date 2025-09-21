import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router-dom";

import bgImage from "../../assets/login2.jpg";

const Signup = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="fixed inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Overlay */}
      <div className="fixed inset-0 w-full h-full bg-gray-800 opacity-20 z-0" />
      {/* Content */}
      <div className="relative z-10 flex w-full max-w-6xl items-center justify-between px-8 py-12">
        {/* Left: Logo */}
        <div className="flex flex-col items-center justify-center w-1/2">
          <div className="flex items-center space-x-3 mb-6">
            <FaGraduationCap className="text-white text-6xl drop-shadow-lg" />
            <span className="text-6xl font-bold text-white drop-shadow-lg">
              study<span className="text-blue-400">Pro</span>
            </span>
          </div>
        </div>
        {/* Right: Signup Form */}
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-8 flex flex-col">
          <h2 className="text-xl font-bold text-blue-600 text-center mb-2">
            Create Your Account
          </h2>
          <p className="text-gray-600 text-center mb-6 text-xs">
            Fill out the form below to start building and sharing your courses
            with students across the globe
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600">Full Name</label>
              <input
                type="text"
                className="mt-1 w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 placeholder-gray-400"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label className="block text-sm  text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                className="mt-1 w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 placeholder-gray-400"
                placeholder="Email Address"
              />
            </div>
            <div className="flex space-x-2">
              <div className="w-1/2">
                <label className="block text-sm  text-gray-700">Password</label>
                <input
                  type="password"
                  className="mt-1 w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 placeholder-gray-400"
                  placeholder="Password"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm  text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="mt-1 w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 placeholder-gray-400"
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm  text-gray-700">Avatar</label>
              <select className="mt-1 w-full px-4 py-2 bg-gray-100  rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200">
                <option className="text-gray-400">Marketing</option>
                <option className="text-gray-400">Design</option>
                <option className="text-gray-400">Engineering</option>
                <option className="text-gray-400">Business</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-700">
                Current Education Level
              </label>
              <select className="mt-1 w-full px-4 py-2 bg-gray-100  rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 placeholder-gray-400">
                <option className="text-gray-400">College</option>
                <option className="text-gray-400">High School</option>
                <option className="text-gray-400">Graduate</option>
                <option className="text-gray-400">Other</option>
              </select>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-xs text-gray-600">
                By signing up, I agree with the
                <Link to="#" className="text-blue-500 underline">
                  Terms of Use
                </Link>
                &amp;
                <Link to="#" className="text-blue-500 underline">
                  Privacy Policy
                </Link>
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold text-base hover:bg-blue-600 transition-colors duration-200 mt-2"
            >
              Sign up
            </button>
          </form>
          <div className="text-center mt-4 text-sm text-gray-600">
            Already have an account?
            <Link
              to="/login"
              className="text-blue-500 font-semibold hover:underline"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
