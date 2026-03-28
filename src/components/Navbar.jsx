import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <span className="navbar-logo">DM.</span>
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="navbar-cta" onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Hire Me
          </a>
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            id="hamburger-btn"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}>
            {link.label}
          </a>
        ))}
        <a href="#contact" className="btn-primary" onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}>
          Hire Me
        </a>
      </div>
    </>
  );
}
