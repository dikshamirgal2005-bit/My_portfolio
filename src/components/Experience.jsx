import './Experience.css';

const experiences = [
  {
    id: 'learnsmasher',
    company: 'Learn Smasher Edutech',
    role: 'Web Developer',
    period: '2024',
    type: 'Online Internship',
    icon: '💻',
    color: '#06b6d4',
    description:
      'Completed an intensive online internship focusing on web development, where I built responsive web applications and collaborated with a remote team to deliver quality code.',
    skills: ['Web Development', 'HTML/CSS', 'JavaScript', 'Responsive Design'],
    certificate: 'https://drive.google.com/file/d/1u1ewr2650eumri6QBF1bx37AzajEugr5/view?usp=sharing',
  },
  {
    id: 'airbots',
    company: 'Airbots Aerospace Pvt. Ltd.',
    role: 'AWS / Web Developer Intern',
    period: '2024',
    type: 'Internship',
    icon: '🚀',
    color: '#f59e0b',
    description:
      'Worked as an AWS and Web Developer intern, gaining hands-on experience with cloud infrastructure, deployment pipelines, and building scalable web solutions.',
    skills: ['AWS', 'Web Development', 'Cloud Infrastructure', 'Deployment'],
    certificate: 'https://drive.google.com/file/d/1si7-9PJKh7NOhm9sjDNJ-a2TDFt3m9f5/view?usp=sharing',
  },
  {
    id: 'zentech',
    company: 'Zentech Private Limited',
    role: 'UI/UX Designer Intern',
    period: '2024',
    type: 'Internship',
    icon: '🎨',
    color: '#a855f7',
    description:
      'Designed user interfaces and experiences for client products, collaborating closely with development teams to bring wireframes and prototypes to life using Figma.',
    skills: ['Figma', 'UI Design', 'UX Research', 'Prototyping', 'Wireframing'],
    certificate: 'https://drive.google.com/file/d/1Y8ftzLiufNk4M5tfv2uqq3OBpDboBjEI/view?usp=sharing',
  },
];

export default function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <div className="experience-header">
          <div className="section-label">Work History</div>
          <h2 className="section-title">My <span>Experience</span></h2>
          <p className="section-desc">
            Practical experience across design and cloud development — building real products for real clients.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={exp.id} className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`} id={`exp-${exp.id}`}>
              <div className="timeline-dot" style={{ background: exp.color, boxShadow: `0 0 20px ${exp.color}80` }}>
                <span>{exp.icon}</span>
              </div>
              <div className="timeline-card glass-card">
                <div className="exp-card-top">
                  <div>
                    <div className="exp-type-badge" style={{ color: exp.color, background: `${exp.color}15`, border: `1px solid ${exp.color}30` }}>
                      {exp.type}
                    </div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-company">{exp.company}</p>
                    <p className="exp-period">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                      {exp.period}
                    </p>
                  </div>
                </div>
                <p className="exp-description">{exp.description}</p>
                <div className="exp-skills">
                  {exp.skills.map((s) => (
                    <span key={s} className="exp-skill-tag">{s}</span>
                  ))}
                </div>
                <a
                  href={exp.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="exp-cert-link"
                  id={`exp-${exp.id}-cert`}
                  style={{ color: exp.color, borderColor: `${exp.color}40`, background: `${exp.color}10` }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                  View Certificate
                </a>
              </div>
            </div>
          ))}

          {/* Center line */}
          <div className="timeline-line"></div>
        </div>
      </div>
    </section>
  );
}
