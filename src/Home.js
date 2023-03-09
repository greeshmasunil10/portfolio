import React, { useEffect, useRef } from "react";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Intro from "./Intro";
import ScrollToTopButton from "./Controller/ScrollToTopButton";
import AnimatedCursor from "react-animated-cursor";

const Home = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>


      <div id="home-section" className="section">
        <Intro />

        <div id="about-me-section" className="section">
          <AboutMe />
        </div>
        <div id="projects-section" className="section">
          <Projects />
        </div>
        <div id="education-section" className="section">
          <Education />
        </div>
        <div id="skills-section" className="section">
          <Skills />
        </div>
      </div>
      <ScrollToTopButton handleScrollTop={handleScrollTop} />
      <AnimatedCursor
        innerSize={8}
        outerSize={16}
        color='200, 0, 116'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        trailingSpeed={20}
        trailingDelay={0}
      />
    </div>
  );
};

export default Home;
