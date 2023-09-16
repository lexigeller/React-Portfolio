import React from 'react';
import PortfolioContent from './PortfolioContent';
import '../App.css';

function Portfolio() {
  return (
    <section id="portfolio">
      <div className="container">
        <h2>Portfolio</h2>
        <PortfolioContent />
      </div>
    </section>
  );
}

export default Portfolio;
