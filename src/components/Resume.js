import React from 'react';

function Resume() {
  return (
    <section id="resume">
        <div className="resume-download">
          <p>Download my full resume:</p>
          <a
            href="pdf"
            download="src/assets/Mock-Resume.pdf"
            className="btn btn-primary"
          >
            Download Resume
          </a>
        </div>
    </section>
  );
}

export default Resume;
