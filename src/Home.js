import React, { useState } from "react";
import AboutMe from "./Sections/AboutMe";
import Projects from "./Sections/Projects";
import Education from "./Sections/Education";
import Intro from "./Sections/Intro";
import ScrollToTopButton from "./Helpers/ScrollToTopButton";
import AnimatedCursor from "react-animated-cursor";
import ContactMe from "./Sections/ContactMe";
import "./Styles/App.css";

class Switch extends React.Component {
  render() {
    var switchClass = this.props.isOn ? "cube-switch active" : "cube-switch";
    return (
      <div className={switchClass}>
        <span className="switch" onClick={this.props.onSwitched}>
          <span className="switch-state off">OFF</span>
          <span className="switch-state on">ON</span>
        </span>
      </div>
    );
  }
}

class Bulb extends React.Component {
  render() {
    let lightClass = this.props.isOn ? "light-bulb on" : "light-bulb off";
    return (
      <div className={lightClass}></div>
    )
  }
}

const Home = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [isLightMode, setIsLightMode] = useState(true);

  const handleToggleMode = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <main className={isLightMode ? "light" : ""}>
      <div id="home-section" className="section">
        <Switch isOn={isLightMode} onSwitched={handleToggleMode} />
        <Bulb isOn={isLightMode} />
        <Intro />
      </div>
      <div id="about-me-section" className="section">
        <AboutMe />
      </div>
      <div id="projects-section" className="section">
        <Projects />
      </div>
      <div id="education-section" className="section">
        <Education />
      </div>
      <div id="contact-me-section" className="">
        <ContactMe />
      </div>

      <ScrollToTopButton handleScrollTop={handleScrollTop} />
      <AnimatedCursor
        className="my-cursor"
        color="var(--cursor-color)"
        innerSize={8}
        outerSize={40}
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        trailingSpeed={8}
        trailingDelay={0}
      />
    </main>
  );
};

export default Home;
