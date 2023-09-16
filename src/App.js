import React, { useState } from 'react';
import Navigation from './components/Navigation';
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
      <Navigation activeSection={activeSection} onNavItemClick={handleNavItemClick} />
      <main>
        {activeSection === 'About Me' && <AboutMe />}
        {activeSection === 'Portfolio' && <Portfolio />}
        {activeSection === 'Contact' && <Contact />}
        {activeSection === 'Resume' && <Resume />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
