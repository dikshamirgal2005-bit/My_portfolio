import './About.css';

const PROFILE_PHOTO = 'https://drive.google.com/thumbnail?id=1q-y0deizx7C_LxBmYagH5g2K6qwZDhcD&sz=w800';

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-inner">
          <div className="about-visual">
            <div className="about-card glass-card">
              <div className="about-avatar-mini">
                <img
                  src={PROFILE_PHOTO}
                  alt="Diksha Mirgal"
                  className="about-avatar-img"
                  onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.textContent = 'DM'; }}
                />
              </div>
              <h3 className="about-card-name">Diksha Kailas Mirgal</h3>
              <p className="about-card-role">Web Developer</p>
              <div className="about-card-badges">
                <span className="badge">📍 India</span>
                <span className="badge" style={{ background: 'rgba(6,182,212,0.12)', borderColor: 'rgba(6,182,212,0.3)', color: '#22d3ee' }}>🎓 CS Student</span>
              </div>
              <div className="about-info-list">
                <div className="info-row">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <span>dikshamirgal2005@gmail.com</span>
                </div>
                <div className="info-row">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.08 19.79 19.79 0 01.22 1.5 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.58-1.58a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  <span>+91 9987258174</span>
                </div>
                <div className="info-row">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  <span>linkedin.com/in/diksha-mirgal</span>
                </div>
              </div>
              <div className="about-availability">
                <span className="avail-dot"></span>
                <span>Open to new opportunities</span>
              </div>
            </div>
          </div>

          <div className="about-text">
            <div className="section-label">About Me</div>
            <h2 className="section-title">Crafting Digital <span>Experiences</span></h2>
            <p className="about-para">
              I'm <strong>Diksha Kailas Mirgal</strong>, a dedicated Web Developer with a passion for building clean, performant, and user-centric web applications. With a solid foundation in front-end technologies and cloud services, I enjoy translating complex ideas into elegant digital solutions.
            </p>
            <p className="about-para">
              My journey spans UI/UX design at <strong>Zentech Pvt. Ltd.</strong> and cloud & web development at <strong>Airbots Aerospace</strong>—giving me a unique perspective that blends aesthetic sensitivity with technical depth.
            </p>
            <p className="about-para">
              I've built real-world projects like an E-Waste Management System and a Multi-Event platform used in college settings. I love hackathons—I've been a finalist at <strong>Elite Hack 1.0</strong> and participated in events at <strong>IIT(BHU) Varanasi</strong>.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">💻</span>
                <div>
                  <h4>Web Developer</h4>
                  <p>Learn Smasher Edutech (Online)</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🏆</span>
                <div>
                  <h4>Hackathon Finalist</h4>
                  <p>Elite Hack 1.0 by Elite Coders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
