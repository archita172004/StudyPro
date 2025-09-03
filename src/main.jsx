import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Features from "./components/Features/Features.jsx";
import Ready from "./components/Ready.jsx";
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Features />
    <Ready />
    <Footer />
  </StrictMode>
);
