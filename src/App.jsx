import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="divider"></div>
        <About />
        <div className="divider"></div>
        <Skills />
        <div className="divider"></div>
        <Projects />
        <div className="divider"></div>
        <Experience />
        <div className="divider"></div>
        <Achievements />
        <div className="divider"></div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
