import React, { useState } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('About Me');

  const handleNavItemClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <Header onNavItemClick={handleNavItemClick} activeSection={activeSection} />
      <main>
        {window.location.pathname === '/about' && <AboutMe />}
        {window.location.pathname === '/portfolio' && <Portfolio />}
        {window.location.pathname === '/contact' && <Contact />}
        {window.location.pathname === '/resume' && <Resume />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
