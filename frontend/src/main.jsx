import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Features from "./components/Features/Features.jsx";
import Footer from "./components/Footer.jsx";

import Signup from "./components/auth/Signup.jsx";
import Login from "./components/auth/Login.jsx";

import React from "react";

import MainLayout from "./components/MainLayout.jsx";

// set up routes using createRoutesFromElements and Route elements for better flexibility
import { createRoutesFromElements, Route } from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<MainLayout />}>
        <Route path="/" element={<App />} />
        <Route path="/features" element={<Features />} />
      </Route>
      {/* set up auth routes outside main layout as we dont want navbar and footer there */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
