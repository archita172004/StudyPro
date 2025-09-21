import { FaGraduationCap } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
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
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold text-base"
                : "text-gray-600 hover:text-blue-500 transition-colors duration-200 text-base"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold text-base"
                : "text-gray-600 hover:text-blue-500 transition-colors duration-200 text-base"
            }
            to="/features"
          >
            Features
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold text-base"
                : "text-gray-600 hover:text-blue-500 transition-colors duration-200 text-base"
            }
            to="/contact"
          >
            Contact Us
          </NavLink>

          {/* Buttons */}
          <div className="flex items-center space-x-3 ml-4">
            <Link
              to="/signup"
              className="bg-blue-500 text-white px-6 py-2.5 rounded-lg text-base font-semibold hover:bg-blue-600 transition-colors duration-200 shadow-md"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="text-blue-500 px-4 py-2.5 rounded-lg font-semibold text-base hover:bg-blue-50 transition-colors duration-200"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
