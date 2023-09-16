import React, { useState } from 'react';

function Navigation() {
  const [activeNavItem, setActiveNavItem] = useState('About Me');

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">Portfolio | Lexi Geller
        <a className="navbar-brand"></a>
        <ul className="navbar-nav">
            <li className={`nav-item ${activeNavItem === 'About Me' ? 'active' : ''}`}>
                <a
                className="nav-link"
                href="/about"  
                onClick={() => handleNavItemClick('About Me')}
                >
                    About Me
                </a>
            </li>
            <li className={`nav-item ${activeNavItem === 'Portfolio' ? 'active' : ''}`}>
                <a
                className="nav-link"
                href="/portfolio"
                onClick={() => handleNavItemClick('Portfolio')}
                >
                    Portfolio
                </a>
                </li>
  <li className={`nav-item ${activeNavItem === 'Contact' ? 'active' : ''}`}>
    <a
      className="nav-link"
      href="/contact"  // Link to your Contact page
      onClick={() => handleNavItemClick('Contact')}
    >
      Contact
    </a>
  </li>
  <li className={`nav-item ${activeNavItem === 'Resume' ? 'active' : ''}`}>
    <a
      className="nav-link"
      href="/resume"  // Link to your Resume page
      onClick={() => handleNavItemClick('Resume')}
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
