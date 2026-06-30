import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Services from './sections/Services';
import Resume from './sections/Resume';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
