import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-top-line"></div>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-logo">DM.</span>
            <p className="footer-tagline">Crafting digital experiences with passion & precision.</p>
          </div>
          <div className="footer-links-group">
            <h4>Navigation</h4>
            <ul>
              {['About', 'Skills', 'Projects', 'Experience', 'Achievements', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} onClick={(e) => { e.preventDefault(); document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' }); }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-links-group">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://github.com/dikshamirgal2005-bit" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/diksha-mirgal/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="mailto:dikshamirgal2005@gmail.com">Email</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {year} <span>Diksha Kailas Mirgal</span>. All rights reserved.</p>
          <p className="footer-made">Made with <span className="heart">❤️</span> in React</p>
        </div>
      </div>
    </footer>
  );
}
