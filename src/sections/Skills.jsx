import { SiMongodb, SiExpress, SiTailwindcss, SiFirebase, SiGit, SiGithub, SiFigma, SiPostman } from 'react-icons/si';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', icon: <FaReact color="#61DAFB" />, level: 90 },
      { name: 'JavaScript', icon: <FaJs color="#F7DF1E" />, level: 85 },
      { name: 'HTML5', icon: <FaHtml5 color="#E34F26" />, level: 95 },
      { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" />, level: 90 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss color="#38BDF8" />, level: 88 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs color="#68A063" />, level: 82 },
      { name: 'Express.js', icon: <SiExpress color="#fff" />, level: 80 },
      { name: 'MongoDB', icon: <SiMongodb color="#4DB33D" />, level: 78 },
      { name: 'Firebase', icon: <SiFirebase color="#FFCA28" />, level: 75 },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: <SiGit color="#F05032" />, level: 85 },
      { name: 'GitHub', icon: <SiGithub color="#fff" />, level: 85 },
      { name: 'Figma', icon: <SiFigma color="#F24E1E" />, level: 70 },
      { name: 'Postman', icon: <SiPostman color="#FF6C37" />, level: 80 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section-title">
          <h2>My <span>Skills</span></h2>
          <p>Technologies I work with</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <div className="skill-category" key={i}>
              <h3 className="category-title">{cat.title}</h3>
              <div className="skill-list">
                {cat.skills.map((skill, j) => (
                  <div className="skill-item" key={j}>
                    <div className="skill-header">
                      <div className="skill-icon">{skill.icon}</div>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
