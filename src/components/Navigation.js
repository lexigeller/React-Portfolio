import React, { useState } from 'react';

function Navigation() {
  const [activeNavItem, setActiveNavItem] = useState('About Me');

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand">Portfolio | Lexi Geller</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className={`nav-item ${activeNavItem === 'About Me' ? 'active' : ''}`}>
              <a
                className="nav-link"
                href="#about-me"
                onClick={() => handleNavItemClick('About Me')}
              >
                About Me
              </a>
            </li>
            <li className={`nav-item ${activeNavItem === 'Portfolio' ? 'active' : ''}`}>
              <a
                className="nav-link"
                href="#portfolio"
                onClick={() => handleNavItemClick('Portfolio')}
              >
                Portfolio
              </a>
            </li>
            <li className={`nav-item ${activeNavItem === 'Contact' ? 'active' : ''}`}>
              <a
                className="nav-link"
                href="#contact"
                onClick={() => handleNavItemClick('Contact')}
              >
                Contact
              </a>
            </li>
            <li className={`nav-item ${activeNavItem === 'Resume' ? 'active' : ''}`}>
              <a
                className="nav-link"
                href="#resume"
                onClick={() => handleNavItemClick('Resume')}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
