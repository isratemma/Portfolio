import { FiArrowRight, FiDownload, FiUser } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SiMongodb, SiNodedotjs } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import scrollTo from '../utils/scrollTo';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container container">
        {/* Left Side */}
        <div className="hero-left">
          <div className="hello-badge">
            <span>👋</span> Hello, I&apos;m
          </div>

          <h1 className="hero-name">
            <span className="white">Israt </span>
            <span className="blue">Jahan </span>
            <span className="white">Ema</span>
          </h1>

          <h2 className="hero-role">
            <span className="green">MERN Stack</span> Web Developer
          </h2>

          <p className="hero-desc">
            I build fast, responsive, and modern full-stack web applications
            using MongoDB, Express.js, React, Node.js and modern technologies.
          </p>

          <div className="hero-btns">
            <button className="btn-primary" onClick={() => scrollTo('projects')}>
              View Projects <FiArrowRight />
            </button>
            <button className="btn-outline" onClick={() => scrollTo('contact')}>
              Hire Me <FiUser />
            </button>
            <a href="/resume.pdf" download>
              <button className="btn-outline">
                Download Resume <FiDownload />
              </button>
            </a>
          </div>

          <div className="hero-social">
            <p>Connect with me</p>
            <div className="social-icons">
              <a href="https://github.com/isratemma" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/israt-jahan-ema" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:israt@email.com" aria-label="Email">
                <MdEmail />
              </a>
              <a href="https://twitter.com/isratemma" target="_blank" rel="noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="hero-right">
          <div className="hero-image-wrapper">
            <div className="orbit-ring"></div>
            <div className="hero-blob"></div>
            <div className="hero-photo-placeholder">
              <span>IJE</span>
            </div>

            {/* Floating tech icons */}
            <div className="tech-icon icon-mongo">
              <SiMongodb color="#4DB33D" size={28} />
            </div>
            <div className="tech-icon icon-node">
              <SiNodedotjs color="#68A063" size={28} />
            </div>
            <div className="tech-icon icon-react">
              <FaReact color="#61DAFB" size={28} />
            </div>
            <div className="tech-icon icon-express">
              <span className="express-text">ex</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background dots */}
      <div className="hero-dots"></div>
    </section>
  );
};

export default Hero;
