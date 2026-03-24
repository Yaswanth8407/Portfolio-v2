import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import EducationandCertificates from "./components/EducationandCertificates";
import Projects from "./components/Projects";
import Skills from "./components/TeckStack";
import Contact from "./components/Contact"

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <EducationandCertificates />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
