import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-scroll';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-logo">
          <span className="logo-white">Israt </span>
          <span className="logo-blue">Jahan </span>
          <span className="logo-white">Ema</span>
        </div>

        <ul className="footer-links">
          {['home','about','skills','projects','services','resume','contact'].map(link => (
            <li key={link}>
              <Link to={link} smooth={true} duration={500} offset={-80}>
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
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
