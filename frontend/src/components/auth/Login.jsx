import React, { useState, useRef, useEffect } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import bgImage from "../../assets/login3.jpg";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "/",
  withCredentials: true,
});

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    if (!email || !password) {
      toast.error("Please provide email and password");
      return;
    }

    setLoading(true);
    try {
      // Create the payload
      const payload = {
        email,
        password,
      };

      const res = await api.post("/api/v1/user/auth/login", payload);

      const ok =
        (res && res.status >= 200 && res.status < 300) ||
        (res.data && res.data.success);
      if (ok) {
        const text = res.data?.message || "Logged in successfully";
        toast.success(text);
        // Delay navigation so user can see the toast
        timerRef.current = setTimeout(() => {
          navigate("/");
        }, 1400);
      } else {
        toast.error(res.data?.message || "Login failed");
      }
    } catch (err) {
      const msg = err?.response?.data?.message || err.message || "Login failed";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

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
        {/* Right: Login Form */}
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-8 flex flex-col">
          <h2 className="text-xl font-bold text-blue-600 text-center mb-2">
            Login to Your Account
          </h2>
          <p className="text-gray-600 text-center mb-6 text-xs">
            Enter your credentials to access your courses and continue teaching
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm text-gray-600">
                Email Address
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                className="mt-1 w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 placeholder-gray-400"
                placeholder="Email Address"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Password</label>
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password"
                className="mt-1 w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 placeholder-gray-400"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-xs text-gray-600">
                  Remember me
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="text-xs text-blue-500 font-semibold hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full ${
                loading ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600"
              } text-white py-2 rounded-lg font-semibold text-base transition-colors duration-200 mt-2`}
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>
          <div className="text-center mt-4 text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-500 font-semibold hover:underline"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>

      {/* Toast container for notifications */}
      <ToastContainer position="top-center" autoClose={1500} />
    </div>
  );
};

export default Login;
