import { useState } from 'react';
import './Projects.css';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Chat App',
      description: 'Real-time messaging with presence, typing indicators and file sharing',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      image: '💬',
      details:
        'A production-ready chat application featuring direct messages, group chats, message history, read receipts, and file uploads. Uses Socket.io for real-time messaging and MongoDB for persistence.',
    },
    {
      id: 2,
      title: 'Real-Time Money Converter',
      description: 'Live currency conversion with up-to-the-second exchange rates',
      technologies: ['HTML/CSS', 'WebSocket', 'Exchange Rates API'],
      image: '💱',
      details:
        'A fast converter that streams live FX rates via WebSocket and updates the UI in real time. Supports multiple base currencies, historical charts, and rate alerts.',
    },
    {
      id: 3,
      title: 'Video Call App',
      description: 'Peer-to-peer video conferencing using WebRTC',
      technologies: ['React', 'WebRTC', 'Socket.io', 'Flask'],
      image: '📹',
      details:
        'A multi-party video calling application implementing WebRTC for media, Socket.io for signaling, and TURN servers for NAT traversal. Includes screen sharing and chat.',
    },
    {
      id: 4,
      title: 'Portfolio',
      description: 'Personal portfolio site showcasing projects and case studies',
      technologies: ['React', 'Vite', 'CSS', 'Accessibility'],
      image: '💼',
      details:
        'A responsive, accessible portfolio that highlights projects, skills, and contact information. Built with Vite for fast builds and modern JS tooling.',
    },
    {
      id: 5,
      title: 'Frontend of Multiple Projects',
      description: 'Collection of front-end implementations and UI patterns',
      technologies: ['React', 'Tailwind CSS', 'HTML/CSS'],
      image: '🧩',
      details:
        'A consolidated showcase of front-end code for multiple projects — dashboards, landing pages, admin panels and components, documented with Storybook and reusable design tokens.',
    },
  ];

  return (
    <section className="projects">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image">{project.image}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="modal" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>
              <div className="modal-image">{selectedProject.image}</div>
              <h2>{selectedProject.title}</h2>
              <p className="modal-description">{selectedProject.details}</p>
              <div className="modal-tech">
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
              <button className="btn btn-primary">View Project →</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
