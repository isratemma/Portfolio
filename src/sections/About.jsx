import './About.css';

const stats = [
  { number: '2+', label: 'Years Experience' },
  { number: '20+', label: 'Projects Completed' },
  { number: '10+', label: 'Happy Clients' },
  { number: '5+', label: 'Technologies' },
];

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-title">
          <h2>About <span>Me</span></h2>
          <p>Get to know me better</p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <div className="about-photo-placeholder">
              <span>IJE</span>
            </div>
            <div className="about-exp-badge">
              <span className="exp-number">2+</span>
              <span className="exp-label">Years of Experience</span>
            </div>
          </div>

          <div className="about-text">
            <h3>I'm <span className="highlight">Israt Jahan Ema</span>, a MERN Stack Developer</h3>
            <p>
              I am a passionate full-stack web developer specializing in the MERN stack —
              MongoDB, Express.js, React, and Node.js. I love building clean, efficient,
              and user-friendly web applications that solve real-world problems.
            </p>
            <p>
              With a strong foundation in both frontend and backend development, I focus on
              writing scalable, maintainable code and delivering exceptional digital experiences.
              I'm always learning and keeping up with the latest industry trends.
            </p>

            <div className="about-info-grid">
              <div className="info-item">
                <span className="info-label">Name</span>
                <span className="info-value">Israt Jahan Ema</span>
              </div>
              <div className="info-item">
                <span className="info-label">Role</span>
                <span className="info-value">MERN Stack Developer</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email</span>
                <span className="info-value">israt@email.com</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location</span>
                <span className="info-value">Bangladesh</span>
              </div>
              <div className="info-item">
                <span className="info-label">Availability</span>
                <span className="info-value available">Available for hire</span>
              </div>
              <div className="info-item">
                <span className="info-label">Languages</span>
                <span className="info-value">English, Bengali</span>
              </div>
            </div>

            <a href="/resume.pdf" download>
              <button className="btn-primary">Download Resume</button>
            </a>
          </div>
        </div>

        <div className="about-stats">
          {stats.map((stat, i) => (
            <div className="stat-card" key={i}>
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
