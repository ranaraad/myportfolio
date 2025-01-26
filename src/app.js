import React, { useState } from 'react';
import { Github, Linkedin, Mail, Binary, Terminal, Globe } from "lucide-react";
import pfp from "./assets/pfp.jpg";

const App = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [activeSection, setActiveSection] = useState('projects');

  const projects = [
    {
      title: "House Rental Platform",
      tech: ["React", "React Native", "Tailwind CSS" , "Shadcn"],
      description: "A platform enabling displaced individuals to find and rent temporary housing across web and mobile applications. Implemented user-friendly interfaces for landlords to showcase house availability."
    },
    {
      title: "Venue Booking Website",
      tech: ["HTML", "CSS", "JavaScript", "Firebase"],
      description: "A comprehensive platform connecting artists and bands with venues for booking performance slots. Features a user-friendly interface for venue availability management and booking requests."
    },
    {
      title: "Computer Shop SPA",
      tech: ["HTML", "CSS", "JavaScript"],
      description: "A dynamic single page application for a computer shop website, focusing on JavaScript functionality and responsive design."
    },
    {
      title: "INSTRUMATE",
      tech: ["JavaFX", "Java", "SQL"],
      description: "A platform for music stores to showcase their instrument inventory with detailed information. Includes user-friendly navigation for browsing, purchasing, and order management."
    }
  ];

  const skills = {
    programming: ["React", "React Native", "HTML", "CSS", "JavaScript", "Java", "C++", "SQL", "PL/SQL"],
    software: ["Git", "Visual Studio", "MySQL Workbench", "Firebase"],
    languages: ["Arabic", "English", "French"]
  };

  const getSkillIcon = (category) => {
    switch(category) {
      case 'programming': return <Terminal className="h-6 w-6" />;
      case 'software': return <Binary className="h-6 w-6" />;
      case 'languages': return <Globe className="h-6 w-6" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-cyan-500">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),rgba(0,0,0,1))] pointer-events-none"></div>
      <div className="fixed inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8),transparent_2px)] bg-[size:4px_100%] pointer-events-none"></div>
      <div className="fixed inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.8),transparent_2px)] bg-[size:100%_4px] pointer-events-none"></div>
      
      <div className="relative">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="relative group">
              <div className="w-48 h-48 rounded-lg overflow-hidden border-2 border-cyan-500 relative z-10">
                <div className="absolute inset-0 bg-cyan-500/10 backdrop-blur-sm"></div>
                <img 
                  src={pfp}
                  alt="Rana Raad" 
                  className="w-full h-full object-cover mix-blend-luminosity"
                />
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
                <span className="text-white">Rana</span>
                <span className="text-cyan-500">Raad</span>
              </h1>
              <p className="text-xl text-cyan-300 mb-6 font-mono">Computer Science Student</p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a 
                  href="https://github.com/ranaraad" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-md border border-cyan-500 text-cyan-500 hover:bg-cyan-500/20"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/rana-raad-8773ab239/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-md border border-cyan-500 text-cyan-500 hover:bg-cyan-500/20"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:rana.raad03@gmail.com" 
                  className="p-2 rounded-md border border-cyan-500 text-cyan-500 hover:bg-cyan-500/20"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveSection('projects')}
              className={`p-2 text-cyan-500 border rounded-md ${
                activeSection === 'projects' ? 'bg-cyan-500/10' : 'hover:bg-cyan-500/20'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveSection('skills')}
              className={`p-2 text-cyan-500 border rounded-md ${
                activeSection === 'skills' ? 'bg-cyan-500/10' : 'hover:bg-cyan-500/20'
              }`}
            >
              Skills
            </button>
          </div>

          {activeSection === 'projects' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`p-4 bg-black/50 border rounded-md ${
                    activeCard === index ? 'border-cyan-500' : 'border-cyan-500/30'
                  }`}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <h3 className="text-xl text-cyan-500 mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-sm border rounded-md border-cyan-500/30 text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-cyan-300">{project.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'skills' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="p-4 bg-black/50 border rounded-md border-cyan-500/30">
                  <h3 className="text-lg text-cyan-500 mb-2 flex items-center gap-2">
                    {getSkillIcon(category)} {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-sm border rounded-md border-cyan-500/30 text-cyan-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
