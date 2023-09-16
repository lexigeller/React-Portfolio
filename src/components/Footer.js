import React from 'react';
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import '../App.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <p>&copy; 2023 Lexi Geller</p>
          </div>
          <div className="col-12 col-md-6">
            <ul className="social-icons">
              <li className="logo">
                <a href="https://github.com/lexigeller/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                  <VscGithubAlt />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/lexi-m-geller/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                  <AiOutlineLinkedin />
                </a>
                <style>{`
                  /* Custom CSS to remove the bullet point */
                  .social-icons li.logo {
                    list-style: none;
                  }
                `}</style>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
