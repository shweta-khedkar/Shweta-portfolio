// export default About;

import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_p3.jpg";

const About = () => {
  const skills = [
    { name: "HTML & CSS", level: 95 },
    { name: "MERN: MongoDB + ReactJS + ExpressJS + NodeJS", level: 80 },
    { name: "Java", level: 85 },
    { name: "Networking", level: 70 },
    { name: "Cyber Security Measures", level: 75 },
    { name: "Databases: MongoDB + SQL", level: 80 },
  ];

  return (
    <div id="about" className="about">
      <div className="title-box">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="Profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a passionate and dedicated developer currently pursuing an
              M.Tech in Cybersecurity from MIT-WPU College, having completed my
              B.Tech in Computer Science and Engineering from VIIT College. With
              a strong foundation in software development, I have a keen
              interest in Full Stack Development complemented by a deep
              enthusiasm for cybersecurity.
            </p>
            <p>
              Over the years, I have successfully developed numerous frontend
              web applications and full stack projects, always ensuring that
              security measures are integrated into the development process. My
              drive to stay at the intersection of development and security
              allows me to create robust, user-centric solutions while adhering
              to modern best practices in both domains.
            </p>
          </div>
          <div className="about-skills">
            {skills.map((skill, index) => (
              <div className="about-skill" key={index}>
                <div className="skill-header">
                  <p>{skill.name}</p>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-level"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Months of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Certifications</p>
        </div>
      </div>
    </div>
  );
};

export default About;
