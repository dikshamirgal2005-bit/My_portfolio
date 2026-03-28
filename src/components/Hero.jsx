import { useEffect, useRef } from 'react';
import './Hero.css';

const PROFILE_PHOTO = 'https://drive.google.com/thumbnail?id=1q-y0deizx7C_LxBmYagH5g2K6qwZDhcD&sz=w800';

const roles = ['Web Developer', 'React Developer', 'UI/UX Enthusiast', 'Cloud Explorer'];

export default function Hero() {
  const roleRef = useRef(null);
  const roleIndex = useRef(0);
  const charIndex = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    const el = roleRef.current;
    if (!el) return;

    const type = () => {
      const current = roles[roleIndex.current];
      if (!deleting.current) {
        el.textContent = current.slice(0, charIndex.current + 1);
        charIndex.current++;
        if (charIndex.current === current.length) {
          deleting.current = true;
          setTimeout(type, 2000);
          return;
        }
      } else {
        el.textContent = current.slice(0, charIndex.current - 1);
        charIndex.current--;
        if (charIndex.current === 0) {
          deleting.current = false;
          roleIndex.current = (roleIndex.current + 1) % roles.length;
        }
      }
      setTimeout(type, deleting.current ? 60 : 100);
    };

    const timer = setTimeout(type, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="hero-content">
        <div className="hero-inner">
          {/* Left */}
          <div className="hero-left">
            <div className="hero-greeting">
              <span className="dot"></span>
              Available for opportunities
            </div>

            <h1 className="hero-name">
              Hi, I'm <br />
              <span className="gradient-text">Diksha Kailas Mirgal</span>
            </h1>

            <p className="hero-role">
              <span ref={roleRef}>Web Developer</span>
              <span className="cursor-blink">|</span>
            </p>

            <p className="hero-bio">
              Passionate about crafting modern, scalable web applications with clean code and elegant design. I bridge the gap between aesthetics and functionality—turning ideas into impactful digital experiences.
            </p>

            <div className="hero-socials">
              <a href="https://github.com/dikshamirgal2005-bit" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub" id="hero-github">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/diksha-mirgal/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn" id="hero-linkedin">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href="mailto:dikshamirgal2005@gmail.com" className="social-link" aria-label="Email" id="hero-email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              </a>
            </div>

            <div className="hero-actions">
              <a href="#projects" className="btn-primary" id="hero-view-projects" onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                View Projects
              </a>
              <a href="mailto:dikshamirgal2005@gmail.com" className="btn-secondary" id="hero-contact">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                Get In Touch
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3</span>
                <span className="stat-label">Internships</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Skills</span>
              </div>
            </div>
          </div>

          {/* Right - Avatar */}
          <div className="hero-right">
            <div className="avatar-container">
              <div className="avatar-ring">
                <div className="avatar-ring-inner"></div>
              </div>
              <div className="avatar-circle">
                <img
                  src={PROFILE_PHOTO}
                  alt="Diksha Mirgal"
                  className="avatar-photo"
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                />
                <span className="avatar-fallback">DM</span>
              </div>
              {/* Floating chips */}
              <div className="skill-chip chip-react">
                <span className="chip-dot" style={{ background: '#06b6d4' }}></span>
                React.js
              </div>
              <div className="skill-chip chip-aws">
                <span className="chip-dot" style={{ background: '#f59e0b' }}></span>
                AWS
              </div>
              <div className="skill-chip chip-figma">
                <span className="chip-dot" style={{ background: '#a855f7' }}></span>
                Figma
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-mouse-dot"></div>
        </div>
        <span>Scroll</span>
      </div>

      <style>{`
        .cursor-blink {
          animation: blink 1s step-end infinite;
          color: var(--cyan);
          margin-left: 2px;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
