import React from "react";
import "./Portfolio.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import project1_img from "../../assets/project_1.png";
import project2_img from "../../assets/project_2.png";
import project3_img from "../../assets/project_3.png";
import project4_img from "../../assets/project_4.png";
import project5_img from "../../assets/project_5.png";
import project6_img from "../../assets/project_8.png";
import project7_img from "../../assets/project_9.png";

const Portfolio = () => {
  const projects = [
    {
      title: "MIT MUMBAI Admission Portal",
      description:
        "I built a fully functional admission portal for MIT Mumbai using ReactJS for the frontend and integrated a mail server for handling email confirmations and notifications. The system allows students to register, upload documents, and receive admission updates securely.",
      thumbnail: project1_img,
      github: "https://github.com/shweta-khedkar/landing_page_mit_mumbai",
      live: "https://landing-page-mit-mumbai.vercel.app/",
    },
    {
      title: "MIT MUMBAI Website",
      description:
        "Developed a fully functional and responsive website for MIT Mumbai using ReactJS and Bootstrap. Integrated a mail server for contact forms and notifications to ensure seamless communication.",
      thumbnail: project2_img,
      github: "https://github.com/shweta-khedkar/mit_mumbai_bharat_website",
      live: "https://mit-mumbai-bharat-website.vercel.app/",
    },
    {
      title: "React Password Generator",
      description:
        "A simple React application that generates random passwords based on user-defined criteria such as length and character types. It showcases my skills in ReactJS and state management.",
      thumbnail: project3_img,
      github: "https://github.com/shweta-khedkar/passwordGenerator",
      live: "https://password-generator-psi-gules.vercel.app/",
    },
    {
      title: "Job Posting and Searching Platform",
      description:
        "A full-stack application built with ReactJS and NodeJS, allowing users to post job listings and search for jobs. It features user authentication, job filtering",
      thumbnail: project4_img,
      github: "https://github.com/shweta-khedkar/JobFinder-Frontend",
      live: "https://job-finder-app.vercel.app/",
    },
    {
      title: "Pocket Notes React App",
      description:
        "A React application for creating and managing notes. It allows users to add, edit, and delete notes with a user-friendly interface. The app demonstrates my proficiency in ReactJS and local storage management.",
      thumbnail: project5_img,
      github: "https://github.com/shweta-khedkar/PocketNotes",
      live: "https://pocket-notes-self.vercel.app/",
    },
    {
      title: "Tic-Tac-Toe Game",
      description:
        "A classic Tic-Tac-Toe game built with ReactJS. It features a simple and intuitive interface, allowing users to play against each other or against the computer. The game showcases my skills in ReactJS and game logic implementation.",
      thumbnail: project6_img,
      github: "https://github.com/shweta-khedkar/tic-tac-toe",
      live: "https://tic-tac-toe-nine-brown.vercel.app/",
    },
    {
      title: "Rock-Paper-Scissors Game",
      description:
        "A simple Rock-Paper-Scissors game built with HTML, CSS, and JavaScript. It allows users to play against the computer with a fun and interactive interface. The game demonstrates my skills in frontend development and basic game mechanics.",
      thumbnail: project7_img,
      github: "https://github.com/shweta-khedkar/Game-ROCKPAPERSCISSOR",
      live: "https://game-rockpaperscissor.vercel.app/",
    },
    // Add more projects here
  ];

  return (
    <div id="portfolio" className="portfolio">
      <div className="title-box">
        <h1>My Portfolio</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.thumbnail} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-buttons">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                View Source
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-live"
              >
                View Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
