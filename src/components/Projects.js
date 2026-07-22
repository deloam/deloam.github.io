// src/components/Projects.js
import React from 'react';
import './Projects.css'; // Importa o CSS

const projectsData = [
  {
    title: 'System OS',
    technologies: ['TypeScript', 'React', 'Tailwind CSS'],
    description: 'Uma experiência interativa sobre mim inspirada em sistemas operacionais.',
    icon: 'fa-solid fa-microchip',
    accent: '#007aff',
  },
  {
    title: 'Studay',
    technologies: ['TypeScript', 'React', 'Tailwind CSS'],
    description: 'Organização limpa para acompanhar tarefas, estudos e rotina acadêmica.',
    icon: 'fa-solid fa-book',
    accent: '#34c759',
  },
  {
    title: 'Quizzed!',
    technologies: ['TypeScript', 'React', 'Tailwind CSS'],
    description: 'Aplicativo de quiz com fluxo ágil, visual direto e tecnologias modernas.',
    icon: 'fa-solid fa-bolt',
    accent: '#ff9f0a',
  },
  {
    title: 'Portfolio',
    technologies: ['TypeScript', 'Next.js', 'Styled Components'],
    description: 'Portfólio pessoal com foco em apresentação, performance e presença digital.',
    icon: 'fa-solid fa-window-restore',
    accent: '#af52de',
  }
];

const Projects = () => {
  return (
    <section className='projects-section' id="projects">
      <h3 className='section-heading'>
        <i className="fa-solid fa-cube"></i>
        Projetos
      </h3>
      <div className="project-container">
        {projectsData.map((project, index) => (
          <article key={index} className="project-item" style={{ '--accent': project.accent }}>
            <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
            <div className='project-image'>
              <i className={project.icon}></i>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <div className="project-tech">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
            <p className="project-description">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
