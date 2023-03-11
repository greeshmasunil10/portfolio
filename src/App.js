import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./Styles/App.css";
import "./Styles/Animations.css";
import "./Styles/Bulb.css";
import Home from "./Home";
import Experience from "./Sections/Experience";
import Skills from "./Sections/Skills";
import Education from "./Sections/Education";
import AboutMe from "./Sections/AboutMe";
import Projects from "./Sections/Projects";
import ContactMe from "./Sections/ContactMe";
import gsIcon from "./Images/GS.ico";
import { Link as ScrollLink } from "react-scroll";


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="header">
          <nav>
            <ul className="header__nav">
              <li>
                <ScrollLink
                  to="home-section"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-60}
                >
                  <img
                    src={gsIcon}
                    alt="GS Icon"
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: 75,
                      height: 50,
                      paddingLeft: 10,
                      paddingTop: 10,
                    }}
                  />
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="about-me-section"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-60}
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="projects-section"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-60}
                >
                  Projects
                </ScrollLink>
              </li>

              <li>
                <ScrollLink
                  to="education-section"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-60}
                >
                  Education
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="skills-section"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-60}
                >
                  Skills
                </ScrollLink>
              </li>
            </ul>
          </nav>
        </header>
        
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Experience" element={<Experience />} />
          <Route exact path="/Skills" element={<Skills />} />
          <Route exact path="/Education" element={<Education />} />
          <Route exact path="/AboutMe" element={<AboutMe />} />
          <Route exact path="/MyWork" element={<Projects />} />
          <Route exact path="/ContactMe" element={<ContactMe />} />
        </Routes>
      </div>
      <footer><div>
            <p>&copy; 2023 greeshmasunil. All rights reserved.</p>
          </div></footer>
    </BrowserRouter>
  );
};

export default App;
