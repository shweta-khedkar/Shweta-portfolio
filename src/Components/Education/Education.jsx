import React from "react";
import "./Education.css";
import theme_pattern from "../../assets/theme_pattern.svg";
const educationData = [
  {
    degree: "M.Tech in Cybersecurity",
    institution: "MIT-WORLD PEACE UNIVERSITY, Pune",
    percentage: "Pursuing (8.68 CGPA)",
  },
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "VISHWAKARMA INSTITUTE OF INFORMATION TECHNOLOGY, Pune",
    percentage: "9.57 CGPA",
  },
  {
    degree: "Diploma in information Technology",
    institution: "GOVRNMENT POLYTECHNIC, Pune",
    percentage: "88.07%",
  },
  {
    degree: "SSC (10th Grade)",
    institution: "M.E.S. WAGHIRE HIGH SCHOOL, SASWAD, Pune",
    percentage: "88.60%",
  },
];

const Education = () => {
  return (
    <div id="education" className="education">
      <div className="title-box">
        <h1>Education</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>
      <div className="education-cards">
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <h2>{edu.degree}</h2>
            <p className="institution">{edu.institution}</p>
            <p className="percentage">Secured: {edu.percentage}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
