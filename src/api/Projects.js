import React from 'react';
import '../styles/Projects.css';

const ProjectsPage = () => {
  const projects = [
    { id: 1, title: 'Project 1', description: 'A brief description of Project 1' },
    { id: 2, title: 'Project 2', description: 'A brief description of Project 2' },
    { id: 3, title: 'Project 3', description: 'A brief description of Project 3' },
  ];

  return (
    <div className="projects-page">
      <div className="projects-container">
        <h1>My Projects</h1>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <button className="project-button">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
