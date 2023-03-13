import React, { useState, lazy, Suspense } from "react";
import { useSpring, animated } from "react-spring";

const AboutMe = lazy(() => import("./Components/AboutMe"));
const Projects = lazy(() => import("./Components/Projects"));
const Education = lazy(() => import("./Components/Education"));
const Intro = lazy(() => import("./Components/Intro"));
const ScrollToTopButton = lazy(() => import("./Helpers/ScrollToTopButton"));
const AnimatedCursor = lazy(() => import("react-animated-cursor"));
const ContactMe = lazy(() => import("./Components/ContactMe"));

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
    return <div className={lightClass}></div>;
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
    if (isLightMode) {
      document.body.style.backgroundColor = "#000000";
    } else {
      document.body.style.backgroundColor = "#d7f0e4";
    }
  };

  return (
    <main className={isLightMode ? "light" : ""}>
      <div id="home-section" className="section">
        <Switch isOn={isLightMode} onSwitched={handleToggleMode} />
        <Bulb isOn={isLightMode} />

        {/* <div id="home-section" className="section" style={{padding:"30px", minHeight:"50vh"}}>   */}
          <Intro />
        {/* </div> */}
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
