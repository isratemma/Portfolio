import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import scrollTo from '../utils/scrollTo';
import './Footer.css';

const links = ['home', 'about', 'skills', 'projects', 'services', 'resume', 'contact'];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-logo" onClick={() => scrollTo('home')} style={{ cursor: 'pointer' }}>
          <span className="logo-white">Israt </span>
          <span className="logo-blue">Jahan </span>
          <span className="logo-white">Ema</span>
        </div>

        <ul className="footer-links">
          {links.map(link => (
            <li key={link}>
              <a
                href={`#${link}`}
                onClick={(e) => { e.preventDefault(); scrollTo(link); }}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <div className="footer-socials">
          <a href="https://github.com/isratemma" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://linkedin.com/in/israt-jahan-ema" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="mailto:israt@email.com" aria-label="Email"><MdEmail /></a>
          <a href="https://twitter.com/isratemma" target="_blank" rel="noreferrer" aria-label="Twitter"><FaTwitter /></a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Israt Jahan Ema. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
