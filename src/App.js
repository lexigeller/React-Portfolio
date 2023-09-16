import React, { useState } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('About Me'); // Set the default active section

  const handleNavItemClick = (section) => {
    setActiveSection(section);
  };

  // Render the corresponding component based on the activeSection
  const renderSection = () => {
    switch (activeSection) {
      case 'About Me':
        return <AboutMe />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <AboutMe />; // Default to About Me if no match
    }
  };

  return (
    <div className="App">
      <Header onNavItemClick={handleNavItemClick} activeSection={activeSection} />
      <main>{renderSection()}</main>
      <Footer />
    </div>
  );
}

export default App;
