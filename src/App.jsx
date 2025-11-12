import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeNav, setActiveNav] = useState('home');

  return (
    <div className="app">
      <Header activeNav={activeNav} setActiveNav={setActiveNav} />
      <main>
        {activeNav === 'home' && <Hero setActiveNav={setActiveNav} />}
        {activeNav === 'about' && <About />}
        {activeNav === 'projects' && <Projects />}
        {activeNav === 'skills' && <Skills />}
        {activeNav === 'contact' && <Contact />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
