import './Skills.css';

const skillCategories = [
  {
    category: 'Frontend',
    icon: '🎨',
    color: '#06b6d4',
    skills: [
      { name: 'React.js', level: 90, icon: '⚛️' },
      { name: 'Next.js', level: 80, icon: '▲' },
      { name: 'HTML / CSS', level: 95, icon: '🌐' },
      { name: 'JavaScript', level: 85, icon: '🟨' },
    ],
  },
  {
    category: 'Design',
    icon: '✏️',
    color: '#a855f7',
    skills: [
      { name: 'Figma', level: 85, icon: '🎭' },
      { name: 'UI/UX Design', level: 80, icon: '📐' },
      { name: 'Responsive Design', level: 90, icon: '📱' },
    ],
  },
  {
    category: 'Backend & Cloud',
    icon: '☁️',
    color: '#f59e0b',
    skills: [
      { name: 'Python', level: 75, icon: '🐍' },
      { name: 'AWS', level: 70, icon: '☁️' },
      { name: 'Firebase / Supabase', level: 72, icon: '🔥' },
    ],
  },
];

const techStack = [
  { name: 'React', bg: '#61DAFB22', color: '#61DAFB', icon: '⚛️' },
  { name: 'Next.js', bg: '#ffffff12', color: '#fff', icon: '▲' },
  { name: 'Python', bg: '#3B82F622', color: '#60a5fa', icon: '🐍' },
  { name: 'AWS', bg: '#F59E0B22', color: '#F59E0B', icon: '☁️' },
  { name: 'Figma', bg: '#A855F722', color: '#c084fc', icon: '🎭' },
  { name: 'JavaScript', bg: '#EAB30822', color: '#EAB308', icon: '📜' },
  { name: 'HTML5', bg: '#EF444422', color: '#f87171', icon: '🌐' },
  { name: 'CSS3', bg: '#3B82F622', color: '#818cf8', icon: '🎨' },
  { name: 'Firebase', bg: '#F97B1622', color: '#fb923c', icon: '🔥' },
  { name: 'Git', bg: '#F9703622', color: '#f97316', icon: '📦' },
];

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="orb" style={{ width: 300, height: 300, background: 'radial-gradient(circle, rgba(6,182,212,0.08), transparent)', top: '20%', right: '-100px' }}></div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="skills-header">
          <div className="section-label">What I Know</div>
          <h2 className="section-title">My <span>Skills</span> & Expertise</h2>
          <p className="section-desc">
            A blend of design sensibility and engineering precision — I build experiences that look great and work flawlessly.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="skill-category-card glass-card">
              <div className="skill-cat-header">
                <div className="skill-cat-icon" style={{ background: `${cat.color}20`, border: `1px solid ${cat.color}40` }}>
                  {cat.icon}
                </div>
                <h3 className="skill-cat-title">{cat.category}</h3>
              </div>
              <div className="skill-bars">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="skill-bar-item">
                    <div className="skill-bar-top">
                      <span className="skill-name">{skill.icon} {skill.name}</span>
                      <span className="skill-pct" style={{ color: cat.color }}>{skill.level}%</span>
                    </div>
                    <div className="skill-track">
                      <div
                        className="skill-fill"
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${cat.color}80, ${cat.color})`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Scrollable */}
        <div className="tech-stack-section">
          <h3 className="tech-stack-title">Technologies I Work With</h3>
          <div className="tech-scroll-wrapper">
            <div className="tech-scroll-track">
              {[...techStack, ...techStack].map((tech, i) => (
                <div
                  key={`${tech.name}-${i}`}
                  className="tech-pill"
                  style={{ background: tech.bg, border: `1px solid ${tech.color}40`, color: tech.color }}
                >
                  <span>{tech.icon}</span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
