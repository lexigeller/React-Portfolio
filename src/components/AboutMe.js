import React from "react";
import headshot from "../assets/headshot.jpg";

function AboutMe() {
  return (
    <section id="about-me" className="flex-row">
      <div>
        <h1 id="about">
          About Me
        </h1>
        <img src={headshot} alt="profile" />
        <p>
            Hello! I'm Lexi Geller, a recent web development graduate.
        </p>
        <p>
            My long-held interest in patterns and languages led me to the University of Florida, where I obtained a Bachelor's degree in Linguistics with a minor in East Asian Literatures, Languages, and Cultures (Chinese). That, combined with an interest in technology, led me to web development. I recently graduated a full-stack web development bootcamp at the University of Central Florida and am eager to put my newly-honed skills to use.
        </p>
        <p>
            Let's build together.
        </p>
      </div>        
    </section>
  );
}

export default AboutMe;