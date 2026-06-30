import { FiCode, FiServer, FiLayout, FiDatabase, FiSmartphone, FiSettings } from 'react-icons/fi';
import './Services.css';

const services = [
  {
    icon: <FiLayout size={28} />,
    title: 'Frontend Development',
    desc: 'Building responsive, modern, and interactive UIs with React.js, Tailwind CSS, and clean HTML/CSS.',
    color: '#4f8ef7',
  },
  {
    icon: <FiServer size={28} />,
    title: 'Backend Development',
    desc: 'Developing robust REST APIs and server-side logic with Node.js, Express.js, and secure authentication.',
    color: '#00e5a0',
  },
  {
    icon: <FiDatabase size={28} />,
    title: 'Database Design',
    desc: 'Designing and managing efficient MongoDB databases with proper schema design and query optimization.',
    color: '#f7a04f',
  },
  {
    icon: <FiCode size={28} />,
    title: 'Full Stack Apps',
    desc: 'End-to-end MERN stack applications — from database to API to frontend — delivered as complete solutions.',
    color: '#a04ff7',
  },
  {
    icon: <FiSmartphone size={28} />,
    title: 'Responsive Design',
    desc: 'Ensuring every application looks and works perfectly across all screen sizes and devices.',
    color: '#f74f4f',
  },
  {
    icon: <FiSettings size={28} />,
    title: 'Maintenance & Support',
    desc: 'Ongoing support, bug fixes, performance optimization, and feature upgrades for existing projects.',
    color: '#00d4ff',
  },
];

const Services = () => {
  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-title">
          <h2>My <span>Services</span></h2>
          <p>What I can do for you</p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <div className="service-card" key={i}>
              <div className="service-icon" style={{ color: service.color, background: `${service.color}18` }}>
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
