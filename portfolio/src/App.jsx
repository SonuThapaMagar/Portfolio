import React, { useState } from "react";
import "./App.css";
// Importing Navbar
import Navbar from "./components/Navbar";
// Importing Hero Section
import Hero from "./components/Hero";
// Importing TwinklingStars
import TwinklingStars from "./components/Animation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Background stars */}
      <div className="fixed inset-0 -z-10">
        <TwinklingStars />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <Navbar />
        {/* Hero Section */}
        <Hero />
        {/* Footer */}
        <footer className="p-8 text-center text-white">
          <p>&copy; 2025 Sonu Thapa Magar. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
