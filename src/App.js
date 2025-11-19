import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="logo">JHT</h1>
          <ul className="nav-menu">
            <li><a href="#about">About</a></li>
            <li><a href="#interests">Interests</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Jordan Hong Tian</span>
          </h1>
          <p className="hero-subtitle">Frontend Developer</p>
          <p className="hero-description">
            Building beautiful, functional web experiences with modern technologies
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-decoration">
          <div className="floating-card">
            <span className="icon">💻</span>
          </div>
          <div className="floating-card delay-1">
            <span className="icon">🤖</span>
          </div>
          <div className="floating-card delay-2">
            <span className="icon">🎮</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <p className="about-text">
              I'm a passionate frontend developer who loves crafting elegant solutions to complex problems.
              My work combines technical expertise with creative thinking to build applications that not only
              work flawlessly but also delight users.
            </p>
            <p className="about-text">
              With a strong foundation in modern web technologies, I specialize in creating responsive,
              accessible, and performant web applications that make a real difference.
            </p>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id="interests" className="section interests-section">
        <div className="container">
          <h2 className="section-title">What Drives Me</h2>
          <div className="interests-grid">
            <div className="interest-card">
              <div className="interest-icon">🤖</div>
              <h3>Artificial Intelligence</h3>
              <p>
                Fascinated by AI's potential to create and innovate. I explore how AI can
                augment human creativity and solve real-world problems in exciting new ways.
              </p>
            </div>
            <div className="interest-card">
              <div className="interest-icon">✨</div>
              <h3>Creative Development</h3>
              <p>
                Finding and building useful things that matter. I love the process of
                identifying needs and crafting solutions that make life easier and more enjoyable.
              </p>
            </div>
            <div className="interest-card">
              <div className="interest-icon">🎮</div>
              <h3>Gaming</h3>
              <p>
                Gaming is where technology meets art and storytelling. It's a constant source
                of inspiration for creating engaging, interactive experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <span className="project-icon">🚀</span>
                </div>
              </div>
              <div className="project-content">
                <h3>Project One</h3>
                <p>A cutting-edge web application showcasing modern frontend techniques and best practices.</p>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">TypeScript</span>
                  <span className="tag">CSS</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <span className="project-icon">🎨</span>
                </div>
              </div>
              <div className="project-content">
                <h3>Project Two</h3>
                <p>An innovative tool that leverages AI to enhance creative workflows and productivity.</p>
                <div className="project-tags">
                  <span className="tag">AI/ML</span>
                  <span className="tag">React</span>
                  <span className="tag">API</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <span className="project-icon">🎯</span>
                </div>
              </div>
              <div className="project-content">
                <h3>Project Three</h3>
                <p>Interactive gaming experience built with modern web technologies.</p>
                <div className="project-tags">
                  <span className="tag">Game Dev</span>
                  <span className="tag">Canvas</span>
                  <span className="tag">WebGL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section skills-section">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">HTML/CSS</span>
                <span className="skill-tag">Responsive Design</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & Others</h3>
              <div className="skill-tags">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Webpack</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">REST APIs</span>
                <span className="skill-tag">UI/UX</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          <p className="contact-text">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div className="contact-links">
            <a href="mailto:your.email@example.com" className="contact-link">
              <span className="contact-icon">📧</span>
              Email
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-icon">💻</span>
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-icon">💼</span>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Jordan Hong Tian. Built with React.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
