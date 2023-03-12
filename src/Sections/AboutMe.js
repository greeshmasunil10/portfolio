import React from "react";
import ScrollToSectionButton from "../Helpers/ScrollToSectionButton";

const AboutMe = () => {
  return (
    <div className="body">
      <h2 className="heading">About</h2>
      <div className="contentStyle">
        <div
          className="courier"
          style={{ fontSize: "40px", display: "inline" }}
        >
          .me
        </div>
        <div className="content">
          I'm a computer science professional with a master's degree and a
          passion for coding. My expertise includes programming languages like
          Java, Python, JavaScript, React.js, and Node.js.
          <p />
          In my professional life, I work as a Conversational AI developer,
          designing and implementing solutions that help businesses interact
          with their customers more effectively using the latest cutting-edge
          technologies.
          <p />
          But I'm more than just a code monkey. I'm always seeking out new and
          innovative ways to improve the lives of my clients and make a positive
          impact.
          <p />
        </div>
      </div>
      <div>
        <ScrollToSectionButton
          sectionId="projects-section"
          buttonName="See my work."
        />
        {/* 
      <Link to="/MyWork">
        <button class="btn">See my work.</button>
      </Link> */}
      </div>
    </div>
  );
};

export default AboutMe;
