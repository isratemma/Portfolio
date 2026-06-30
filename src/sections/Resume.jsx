import { FiDownload, FiBriefcase, FiBook } from 'react-icons/fi';
import './Resume.css';

const experience = [
  {
    role: 'MERN Stack Developer',
    company: 'Freelance',
    period: '2023 – Present',
    desc: 'Building full-stack web applications for clients using React, Node.js, Express, and MongoDB. Delivering responsive UIs and RESTful APIs.',
  },
  {
    role: 'Frontend Developer',
    company: 'Personal Projects',
    period: '2022 – 2023',
    desc: 'Developed multiple React-based web apps focusing on clean UI, performance, and responsive design using Tailwind CSS.',
  },
];

const education = [
  {
    degree: 'B.Sc in Computer Science & Engineering',
    institution: 'University (Bangladesh)',
    period: '2021 – Present',
    desc: 'Studying core CS concepts including data structures, algorithms, databases, web development, and software engineering.',
  },
  {
    degree: 'Web Development Bootcamp',
    institution: 'Online Courses & Self-Learning',
    period: '2021 – 2022',
    desc: 'Completed comprehensive web development training covering HTML, CSS, JavaScript, React, Node.js, and MongoDB.',
  },
];

const Resume = () => {
  return (
    <section id="resume" className="resume section">
      <div className="container">
        <div className="section-title">
          <h2>My <span>Resume</span></h2>
          <p>My experience and education</p>
        </div>

        <div className="resume-grid">
          {/* Experience */}
          <div className="resume-column">
            <h3 className="resume-col-title">
              <FiBriefcase /> Experience
            </h3>
            <div className="timeline">
              {experience.map((item, i) => (
                <div className="timeline-item" key={i}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-period">{item.period}</span>
                    <h4>{item.role}</h4>
                    <span className="timeline-company">{item.company}</span>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="resume-column">
            <h3 className="resume-col-title">
              <FiBook /> Education
            </h3>
            <div className="timeline">
              {education.map((item, i) => (
                <div className="timeline-item" key={i}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-period">{item.period}</span>
                    <h4>{item.degree}</h4>
                    <span className="timeline-company">{item.institution}</span>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="resume-download">
          <a href="/resume.pdf" download>
            <button className="btn-primary">
              <FiDownload /> Download Full Resume
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
