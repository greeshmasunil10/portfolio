import React, { useState, lazy, Suspense } from "react";
import { useSpring, animated } from "react-spring";

const NavBar = lazy(() => import("./Components/NavBar"));
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
          <span className="switch-state off"> O</span>
          <span className="switch-state on">  |</span>
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

  const [isLightMode, setIsLightMode] = useState(false);

  const handleToggleMode = () => {
    setIsLightMode(!isLightMode);
    if (isLightMode) {
      document.body.style.backgroundColor = "#000000";
    } else {
      document.body.style.backgroundColor = "#ffffff";
    }
  };

  return (
    <main className={isLightMode ? "light" : ""}>
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
      <header className="header">
        <NavBar />
      </header>
              <Switch isOn={isLightMode} onSwitched={handleToggleMode} />
        <Bulb isOn={isLightMode} />
      <div id="home-section" className="home-container transparent-section">


        {/* <div id="home-section" className="section" style={{padding:"30px", minHeight:"50vh"}}>   */}
        <Intro />
        {/* </div> */}
      </div>
      <div id="about-me-section" className="about-me-container transparent-section">
        <AboutMe />
      </div>
      <div id="projects-section" className="projects-container transparent-section">
        <Projects />
      </div>
      <div
        id="education-section"
        className="education-container transparent-section"
        style={{ minHeight: "fit-content" }}
      >
        <Education />
      </div>
      <div
        id="contact-me-section"
        className="contact-me-container transparent-section"
        style={{ minHeight: "fit-content" }}
      >
        <ContactMe />
      </div>

      <ScrollToTopButton handleScrollTop={handleScrollTop} />
    </main>
  );
};

export default Home;
