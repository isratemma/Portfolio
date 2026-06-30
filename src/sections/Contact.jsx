import { useState } from 'react';
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, connect to EmailJS or a backend API
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-title">
          <h2>Get In <span>Touch</span></h2>
          <p>Let's work together</p>
        </div>

        <div className="contact-wrapper">
          {/* Info */}
          <div className="contact-info">
            <h3>Let's talk about your project</h3>
            <p>
              I'm currently available for freelance work and full-time positions.
              If you have a project that you want to get started or think you need my help,
              feel free to reach out!
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="detail-icon"><FiMail /></div>
                <div>
                  <span>Email</span>
                  <a href="mailto:israt@email.com">israt@email.com</a>
                </div>
              </div>
              <div className="contact-detail">
                <div className="detail-icon"><FiMapPin /></div>
                <div>
                  <span>Location</span>
                  <p>Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://github.com/isratemma" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FiGithub />
              </a>
              <a href="https://linkedin.com/in/israt-jahan-ema" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href="https://twitter.com/isratemma" target="_blank" rel="noreferrer" aria-label="Twitter">
                <FiTwitter />
              </a>
            </div>
          </div>

          {/* Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Project Inquiry"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell me about your project..."
                required
              />
            </div>
            <button type="submit" className="btn-primary submit-btn">
              {sent ? '✅ Message Sent!' : <><FiSend /> Send Message</>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
