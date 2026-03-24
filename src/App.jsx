import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import EducationandCertificates from "./components/EducationandCertificates";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <EducationandCertificates />
      <Projects />
    </>
  );
};

export default App;
