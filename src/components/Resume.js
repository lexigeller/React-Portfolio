import React from 'react';

function Resume() {
  return (
    <section>
        <div  id="resume" className="resume-download">
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
