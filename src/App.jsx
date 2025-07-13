import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Education from "./Components/Education/Education";
import Portfolio from "./Components/Portfolio/Portfolio";
import Certifications from "./Components/Certifications/Certifications";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Portfolio />
      <Certifications />
      <Contact />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
