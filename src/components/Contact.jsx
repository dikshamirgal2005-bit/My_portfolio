import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [copied, setCopied] = useState('');

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(label);
      setTimeout(() => setCopied(''), 2000);
    });
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="orb" style={{ width: 400, height: 400, background: 'radial-gradient(circle, rgba(124, 58, 237, 0.1), transparent)', top: '10%', left: '-150px' }}></div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="contact-inner">
          {/* Left */}
          <div className="contact-left">
            <div className="section-label">Get In Touch</div>
            <h2 className="section-title">Let's <span>Connect</span></h2>
            <p className="contact-desc">
              Whether you have a project in mind, need a collaborator, or just want to say hello — my inbox is always open. I'd love to hear from you!
            </p>

            <div className="contact-cards">
              <div className="contact-info-card">
                <div className="contact-icon-wrap" style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.25)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div className="contact-info-text">
                  <span className="contact-info-label">Email</span>
                  <span className="contact-info-value">dikshamirgal2005@gmail.com</span>
                </div>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard('dikshamirgal2005@gmail.com', 'email')}
                  id="copy-email-btn"
                  aria-label="Copy email"
                >
                  {copied === 'email' ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
                  )}
                </button>
              </div>

              <div className="contact-info-card">
                <div className="contact-icon-wrap" style={{ background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.25)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.08 19.79 19.79 0 01.22 1.5 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.58-1.58a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                </div>
                <div className="contact-info-text">
                  <span className="contact-info-label">Phone</span>
                  <span className="contact-info-value">+91 9987258174</span>
                </div>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard('+919987258174', 'phone')}
                  id="copy-phone-btn"
                  aria-label="Copy phone"
                >
                  {copied === 'phone' ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
                  )}
                </button>
              </div>
            </div>

            <div className="contact-social-links">
              <a href="https://www.linkedin.com/in/diksha-mirgal/" target="_blank" rel="noopener noreferrer" className="contact-social-btn linkedin" id="contact-linkedin">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
              <a href="https://github.com/dikshamirgal2005-bit" target="_blank" rel="noopener noreferrer" className="contact-social-btn github" id="contact-github">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>
                GitHub
              </a>
              <a href="mailto:dikshamirgal2005@gmail.com" className="contact-social-btn email" id="contact-email-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                Email Me
              </a>
            </div>
          </div>

          {/* Right — Visual CTA */}
          <div className="contact-right">
            <div className="contact-cta-card">
              <div className="cta-card-glow"></div>
              <div className="cta-card-content">
                <div className="cta-emoji">👋</div>
                <h3 className="cta-title">Available for Freelance & Full-time</h3>
                <p className="cta-desc">
                  I'm currently open to exciting opportunities — whether it's a freelance project, internship, or full-time role in Web Development.
                </p>
                <a href="mailto:dikshamirgal2005@gmail.com" className="btn-primary cta-btn" id="cta-hire-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  Drop Me a Message
                </a>
                <div className="cta-divider">
                  <span>or connect on</span>
                </div>
                <a href="https://www.linkedin.com/in/diksha-mirgal/" target="_blank" rel="noopener noreferrer" className="cta-linkedin-btn" id="cta-linkedin-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
