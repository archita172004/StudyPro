import "./App.css";
import LandingPage from "./components/LandingPage";
import "./index.css";
import { Navbar } from "./components/Navbar.jsx";
import Features from "./components/Features/Features.jsx";
import Ready from "./components/Ready.jsx";
function App() {
  return (
    <>
      <LandingPage />
      <Features />
      <Ready />
    </>
  );
}

export default App;
