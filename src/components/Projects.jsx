import React from 'react';
import '../styles/projects.css';

function Projects() {
  const projects = [
    {
      title: 'CheapStocks',
      description: 'Cheap Stocks is an e-commerce platform dedicated to providing customers with easy access to a wide range of products at affordable prices.',
      technologies: ['React', 'JavaScript', 'CSS', 'HTML'],
      img: 'src/assets/cheapstocks.webp',
      github: 'https://github.com/renegade620/cheapstocks',
      live: 'https://cheapstocks.vercel.app/'
    },
    {
      title: 'UrbanDrive',
      description: 'Urban Drive is a rental car website that allows users to browse available vehicles, make bookings, and manage rental services',
      technologies: ['React', 'JavaScript', 'HTML/CSS', 'Flask'],
      img: '/path/to/image.jpg',
      github: 'https://github.com/E-ugine/URBAN-DRIVE',
      live: 'https://urban-dr-front.onrender.com/'
    },
    {
      title: 'ProjectTracker',
      description: 'A project tracker website has been  designed majorly to ease the work of finding previous projects and see the updates on the ongoing projects by the admin and the student in Moringa School.',
      technologies: ['React', 'JavaScript', 'HTML/CSS', 'Flask'],
      img: '/path/to/image.jpg',
      github: 'https://github.com/george-badia/Project-tracking',
      live: 'https://project-tracking-1.onrender.com/'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">
        <span style={{ color: '#4CAF50' }}>const</span> projects = [
      </h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex}>{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github}>
                {/* <Github size={16} /> */} Code
              </a>
              <a href={project.live}>
                {/* <ExternalLink size={16} /> */} Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
