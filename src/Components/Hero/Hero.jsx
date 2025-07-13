import React from "react";
import "./Hero.css";
import profile_img from "../../assets/mypic.JPG"; // Ensure the path is correct
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  // Function to download resume
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/assets/Shweta_Khedkar_Resume.pdf"; // Path to resume in public folder
    link.download = "Shweta_Khedkar_Resume.pdf";
    link.click();
  };

  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" className="profile-img" />
      <h1>
        <span> Hey..! I'm Shweta Khedkar, </span>
        Fullstack Developer + Cyber Security Student based in Pune, Maharashtra,
        India.
      </h1>
      <p>
        I’ve completed my B.Tech and am currently pursuing an M.Tech in
        Cybersecurity. As a MERN stack certified full-stack developer, I’m
        passionate about building secure, scalable web applications and
        exploring the intersection of software development and cybersecurity.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume" onClick={handleDownloadResume}>
          My Resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
