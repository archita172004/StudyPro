import React from "react";

import {
  FaGraduationCap,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 px-6 ">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center space-x-2">
            <FaGraduationCap className="text-blue-500 text-4xl" />
            <span className="text-3xl font-bold text-gray-800">
              Study<span className="text-blue-500">Pro</span>
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-30 mb-12 mt-12">
            <div>
              <h3 className="font-bold text-gray-700 mb-4">Product</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-700 mb-4">Resources</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    User guides
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    Webinars
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-700 mb-4">Company</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-700 mb-4">Plans & Pricing</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    Personal
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    Start up
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    Organization
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 text-xs">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center justify-center space-x-4 ">
              <span>© 2022 Brand, Inc.</span>
              <span>•</span>
              <a href="#" className="hover:text-blue-500 transition-colors">
                Privacy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-blue-500 transition-colors">
                Terms
              </a>
              <span>•</span>
              <a href="#" className="hover:text-blue-500 transition-colors">
                Sitemap
              </a>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <a
                href="#"
                className="text-blue-400 hover:text-blue-600 transition-colors"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                <FaFacebookF className="text-xl" />
              </a>
              <a
                href="#"
                className="text-blue-700 hover:text-blue-900 transition-colors"
              >
                <FaLinkedinIn className="text-xl" />
              </a>
              <a
                href="#"
                className="text-red-600 hover:text-red-800 transition-colors"
              >
                <FaYoutube className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
