import React from "react";
import "./Certifications.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import cert1_img from "../../assets/Cert1.png"; // Thumbnail for certificate
import cert2_img from "../../assets/Cert3.png";

const Certifications = () => {
  const certifications = [
    {
      title: "Full Stack Developer Certification",
      description:
        "Certified in MERN stack development with hands-on experience in building scalable web apps.",
      thumbnail: cert1_img,
      link: "https://drive.google.com/file/d/1j3zwuJg3pXCGi2AckMzRA9qTU0IzX3Ug/view?usp=sharing",
    },
    {
      title: "Cybersecurity Essentials-CCNAv7",
      description:
        "ccnav7 Cybersecurity Essentials certification covering network security, threat management, and risk mitigation.",
      thumbnail: cert2_img,
      link: "https://drive.google.com/file/d/18u6UmhSD8BQfLZecx2MWI2PmFBUZwraG/view",
    },
  ];

  return (
    <div id="certifications" className="certifications">
      <div className="title-box">
        <h1>My Certifications</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>
      <div className="certifications-container">
        {/* Map your certifications */}
        {certifications.map((cert, index) => (
          <div className="cert-card" key={index}>
            <img src={cert.thumbnail} alt={cert.title} />
            <div className="cert-info">
              <h3>{cert.title}</h3>
              <p>{cert.description}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}

        {/* Special 3rd card for More Certifications */}
        <div className="cert-card more-certifications">
          <div className="cert-info">
            <h3>View More Certifications</h3>
            <p>Check out all my verified certifications on LinkedIn.</p>
            <a
              href="https://www.linkedin.com/in/shweta-khedkar-0a7943193/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
