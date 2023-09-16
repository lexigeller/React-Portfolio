import React from 'react';

function Navigation({ activeSection, onNavItemClick }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        Portfolio | Lexi Geller
        <a className="navbar-brand"></a>
        <ul className="navbar-nav">
          <li className={`nav-item ${activeSection === 'About Me' ? 'active' : ''}`}>
            <a
              className="nav-link"
              href="#about-me"
              onClick={() => onNavItemClick('About Me')}
            >
              About Me
            </a>
          </li>
          <li className={`nav-item ${activeSection === 'Portfolio' ? 'active' : ''}`}>
            <a
              className="nav-link"
              href="#portfolio"
              onClick={() => onNavItemClick('Portfolio')}
            >
              Portfolio
            </a>
          </li>
          <li className={`nav-item ${activeSection === 'Contact' ? 'active' : ''}`}>
            <a
              className="nav-link"
              href="#contact"
              onClick={() => onNavItemClick('Contact')}
            >
              Contact
            </a>
          </li>
          <li className={`nav-item ${activeSection === 'Resume' ? 'active' : ''}`}>
            <a
              className="nav-link"
              href="#resume"
              onClick={() => onNavItemClick('Resume')}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
