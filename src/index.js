import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import image from "./assets/pfp.jpg"
function App() {
  const projects = [
    {
      title: "House Rental Platform",
      tech: "React, React Native, CSS",
      description: "A platform enabling displaced individuals to find and rent temporary housing across web and mobile applications. Implemented user-friendly interfaces for landlords to showcase house availability."
    },
    {
      title: "Venue Booking Website",
      tech: "HTML, CSS, JavaScript, Firebase",
      description: "A comprehensive platform connecting artists and bands with venues for booking performance slots. Features a user-friendly interface for venue availability management and booking requests."
    },
    {
      title: "Computer Shop SPA",
      tech: "HTML, CSS, JavaScript",
      description: "A dynamic single page application for a computer shop website, focusing on JavaScript functionality and responsive design."
    },
    {
      title: "INSTRUMATE",
      tech: "JavaFX, Java, SQL",
      description: "A platform for music stores to showcase their instrument inventory with detailed information. Includes user-friendly navigation for browsing, purchasing, and order management."
    }
  ];

  const skills = {
    programming: ["React", "React Native", "HTML", "CSS", "JavaScript", "Java", "C++", "SQL", "PL/SQL"],
    software: ["Git", "Visual Studio", "MySQL Workbench", "Firebase"],
    languages: ["Arabic", "English", "French"]
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <img 
            src={image} 
            alt="Rana Raad" 
            className="profile-img"
          />
          <div className="header-text">
            <h1>Rana Raad</h1>
            <p>Computer Science Student</p>
            <div className="social-links">
              <a href="https://github.com/ranaraad" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/rana-raad-8773ab239/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:rana.raad03@gmail.com">Email</a>
            </div>
          </div>
        </div>
      </header>

      <main className="main-content">
        <section className="projects-section">
          <h2>Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.title}</h3>
                <p className="project-tech">{project.tech}</p>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="skills-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skills-card">
              <h3>Programming</h3>
              <div className="skills-list">
                {skills.programming.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skills-card">
              <h3>Software</h3>
              <div className="skills-list">
                {skills.software.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skills-card">
              <h3>Languages</h3>
              <div className="skills-list">
                {skills.languages.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);