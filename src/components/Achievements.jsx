import './Achievements.css';

const certificates = [
  {
    id: 'elite-hack',
    title: 'Certificate of Appreciation',
    event: 'Elite Hack 1.0',
    organizer: 'Elite Coders',
    achievement: 'Hackathon Finalist',
    team: 'Team Innovatrix',
    description: 'Recognized as a Finalist at Elite Hack 1.0 for outstanding skills, creativity, dedication, and builder spirit demonstrated throughout the hackathon.',
    color: '#7c3aed',
    gradient: 'linear-gradient(135deg, #4f1d96, #7c3aed)',
    icon: '🏆',
    project: 'Multi-event-management',
    certLink: 'https://drive.google.com/file/d/1pioTYzLCnTbSFEU1E05Ezt89JzCNv2tT/view?usp=sharing',
  },
  {
    id: 'codefest',
    title: 'Certificate of Participation',
    event: "CodeFest'26 – HaXplore",
    organizer: 'IIT(BHU) Varanasi',
    achievement: 'Outstanding Performance',
    description: "Awarded for outstanding performance at the HaXplore event of CodeFest'26, the annual fest of the Dept. of Computer Science and Engineering, IIT(BHU) Varanasi.",
    color: '#06b6d4',
    gradient: 'linear-gradient(135deg, #0e7490, #06b6d4)',
    icon: '🎓',
    project: 'GreenVolt',
    certLink: 'https://drive.google.com/file/d/1e3W3U5VlSVU18ZP1byY3cBcOv5lf8HMm/view?usp=sharing',
  },
];

export default function Achievements() {
  return (
    <section className="section achievements-section" id="achievements">
      <div className="container">
        <div className="achievements-header">
          <div className="section-label">Recognition</div>
          <h2 className="section-title">My <span>Achievements</span></h2>
          <p className="section-desc">
            Certificates and recognitions earned through hackathons and competitive events.
          </p>
        </div>

        <div className="certs-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="cert-card" id={`cert-${cert.id}`}>
              {/* Gradient header */}
              <div className="cert-header" style={{ background: cert.gradient }}>
                <div className="cert-header-pattern"></div>
                <div className="cert-header-content">
                  <span className="cert-main-icon">{cert.icon}</span>
                  <div className="cert-title-wrap">
                    <h3 className="cert-title">{cert.title}</h3>
                    <p className="cert-sub">Certificate</p>
                  </div>
                </div>
                <div className="cert-ribbon">
                  <span>{cert.achievement}</span>
                </div>
              </div>

              {/* Body */}
              <div className="cert-body" style={{ borderTop: `2px solid ${cert.color}` }}>
                <div className="cert-event-info">
                  <h4 className="cert-event">{cert.event}</h4>
                  <p className="cert-org">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                    {cert.organizer}
                  </p>
                  {cert.team && (
                    <p className="cert-team">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>
                      {cert.team}
                    </p>
                  )}
                </div>
                <p className="cert-desc">{cert.description}</p>
                <div className="cert-footer">
                  <div className="cert-project-tag">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" /></svg>
                    {cert.project}
                  </div>
                  <a
                    href={cert.certLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-open-link"
                    id={`cert-${cert.id}-link`}
                    style={{ color: cert.color, borderColor: `${cert.color}40`, background: `${cert.color}12` }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
