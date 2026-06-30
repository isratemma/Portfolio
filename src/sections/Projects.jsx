import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    title: 'ZapShift',
    desc: 'A full-stack parcel delivery platform with real-time tracking, merchant dashboard, and admin panel built with MERN stack.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Firebase'],
    github: 'https://github.com/isratemma/ZapShift',
    live: '#',
    gradient: 'linear-gradient(135deg, #1a3a6e, #0d2040)',
  },
  {
    title: 'Smart Deals',
    desc: 'An e-commerce web application with product listings, cart management, user authentication, and payment integration.',
    tags: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    github: 'https://github.com/isratemma/Smart-Deals',
    live: '#',
    gradient: 'linear-gradient(135deg, #1a4a3e, #0d2a24)',
  },
  {
    title: 'FinEase',
    desc: 'A personal finance management app to track income, expenses, budgets, and generate visual financial reports.',
    tags: ['React', 'Firebase', 'Chart.js', 'Tailwind CSS'],
    github: 'https://github.com/isratemma',
    live: '#',
    gradient: 'linear-gradient(135deg, #3a1a6e, #200d40)',
  },
  {
    title: 'Portfolio Website',
    desc: 'This portfolio site — built with React and Vite, featuring smooth scroll navigation, dark theme, and animated sections.',
    tags: ['React', 'Vite', 'CSS3'],
    github: 'https://github.com/isratemma/Portfolio',
    live: '#',
    gradient: 'linear-gradient(135deg, #3a2a1a, #201508)',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-title">
          <h2>My <span>Projects</span></h2>
          <p>Some things I've built</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div className="project-card" key={i}>
              <div className="project-preview" style={{ background: project.gradient }}>
                <span className="project-initial">{project.title[0]}</span>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map((tag, j) => (
                    <span className="tag" key={j}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                    <FiGithub /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="project-link live">
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
