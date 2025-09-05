import { FaGraduationCap } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="w-full px-6 py-5">
      <nav className="bg-white shadow-4xl rounded-xl px-7 py-3 flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <FaGraduationCap className="text-blue-500 text-4xl" />
          <span className="text-2xl font-bold text-gray-800">
            Study<span className="text-blue-500">Pro</span>
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-blue-500 font-semibold text-base">
            Home
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-500 transition-colors duration-200 text-base"
          >
            Feature
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-500 transition-colors duration-200 text-base"
          >
            Contact Us
          </a>

          {/* Buttons */}
          <div className="flex items-center space-x-3 ml-4">
            <button className="bg-blue-500 text-white px-6 py-2.5 rounded-lg text-base font-semibold hover:bg-blue-600 transition-colors duration-200 shadow-md">
              Register
            </button>
            <button className="text-blue-500 px-4 py-2.5 rounded-lg font-semibold text-base hover:bg-blue-50 transition-colors duration-200">
              Sign in
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
