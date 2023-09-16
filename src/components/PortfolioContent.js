import React from 'react';
import '../App.css';

function PortfolioContent() {
  const projects = [
    {
      title: 'Clikd On',
      description: 'A location-based professional social networking app designed to help users connect with other professionals in their area and industry',
      imageUrl: './src/assets/ClikdOn.jpg', 
      githubUrl: 'https://github.com/dtm589/professional-social-media',
    },
    {
      title: 'Are We There Yet?',
      description: 'An application for users to plan a vacation',
      imageUrl: './src/assets/AreWeThereYet.jpg',
      githubUrl: 'https://github.com/treesaretall/arewethereyet',
    },
    {
        title: 'PWA Text Editor',
        description: 'A single-page text editing application that meets PWA criteria',
        imageUrl: './src/assets/PWA.jpg',
        githubUrl: 'https://github.com/lexigeller/PWA-Text-Editor',
    },
    {
        title: 'Employee Tracker',
        description: 'A command-line application for companies to manage their employee databases',
        imageUrl: './src/assets/EmployeeTracker.jpg',
        liveDemoUrl: 'https://drive.google.com/file/d/14OB_90ZpJET1-T-2X8bbsS6-NPPzKCPm/view',
        githubUrl: 'https://github.com/lexigeller/Employee-Tracker',
    },
    {
        title: 'README Generator',
        description: 'A simple app for generating a professional README',
        imageUrl: './src/assets/READMEGenerator.jpg',
        liveDemoUrl: 'https://drive.google.com/file/d/13V5ZwtubRC5C_gMmXWTagsQEvBDyovdW/view',
        githubUrl: 'https://github.com/lexigeller/README-Generator',
    },
    {
        title: 'Weather Dashboard',
        description: 'An application for users to plan a vacation',
        imageUrl: './src/assets/WeatherDashboard.jpg',
        githubUrl: 'https://github.com/lexigeller/Weather-Dashboard',
    },
  ];

  return (
    <div className="row">
      {projects.map((project, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <div className="card">
            <img src={project.imageUrl} className="card-img-top" alt={project.title} />
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
            </div>
            <div className="card-footer">
              <a
                href={project.liveDemoUrl}
                className="btn btn-primary mr-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PortfolioContent;
