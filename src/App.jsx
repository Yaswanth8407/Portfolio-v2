import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import EducationandCertificates from "./components/EducationandCertificates";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <EducationandCertificates />
      <Projects />
    </div>
  );
};

export default App;
