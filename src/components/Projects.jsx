import './Projects.css';

const projects = [
  {
    id: 'greenvolt',
    name: 'GreenVolt',
    tagline: 'Smart E-Waste Management',
    description:
      'A web-based platform enabling users to request doorstep e-waste pickup and allowing recycling companies to manage these requests efficiently — promoting a greener, circular economy.',
    tech: ['React', 'Firebase', 'CSS3'],
    github: 'https://github.com/dikshamirgal2005-bit/greenvolt',
    live: null,
    gradient: 'linear-gradient(135deg, #059669, #06b6d4)',
    icon: '♻️',
    badge: '🏆 Hackathon Project',
    featured: true,
  },
  {
    id: 'multi-event',
    name: 'Multi-Event Management',
    tagline: 'College Event Platform',
    description:
      'A full-featured web app for managing college events — seminars, workshops, hackathons. Admins publish events with invite links, students register and receive notifications, with QR code attendance and team management.',
    tech: ['React', 'Firebase', 'QR Code', 'EmailJS'],
    github: 'https://github.com/dikshamirgal2005-bit/multi-event-management',
    live: 'https://multi-event-management.vercel.app',
    demo: 'https://drive.google.com/file/d/1owzIlBjJKc7td7_JOHiw_jxizuqClcmH/view?usp=drive_link',
    gradient: 'linear-gradient(135deg, #7c3aed, #a855f7)',
    icon: '🎓',
    badge: '🚀 Deployed',
    featured: true,
  },
  {
    id: 'buildfolio',
    name: 'BuildFolio',
    tagline: 'Portfolio Builder Platform',
    description:
      'A powerful React-based web application helping students and professionals create stunning, shareable portfolio websites in minutes — without writing a single line of code.',
    tech: ['React', 'CSS3', 'JavaScript'],
    github: 'https://github.com/dikshamirgal2005-bit/BuildFolio',
    live: null,
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    icon: '📁',
    badge: '💡 Open Source',
    featured: false,
  },
];

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="projects-header">
          <div className="section-label">My Work</div>
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <p className="section-desc">
            Real-world applications built with modern technologies — from e-waste management to event platforms.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className={`project-card glass-card ${project.featured ? 'featured' : ''}`} id={`project-${project.id}`}>
              {/* Top gradient bar */}
              <div className="project-top-bar" style={{ background: project.gradient }}></div>

              <div className="project-content">
                {/* Header */}
                <div className="project-header">
                  <div className="project-icon-wrap" style={{ background: `${project.gradient.split(',')[0].replace('linear-gradient(135deg, ', '')}22` }}>
                    <span className="project-icon">{project.icon}</span>
                  </div>
                  <div>
                    <h3 className="project-name">{project.name}</h3>
                    <p className="project-tagline">{project.tagline}</p>
                  </div>
                </div>

                {/* Badge */}
                <div className="project-badge">
                  <span>{project.badge}</span>
                </div>

                {/* Description */}
                <p className="project-desc">{project.description}</p>

                {/* Tech Stack */}
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>

                {/* Links */}
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github-link" id={`${project.id}-github`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>
                    Code
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link live-link" id={`${project.id}-live`}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      Live Demo
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link demo-link" id={`${project.id}-demo`}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                      Watch Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
