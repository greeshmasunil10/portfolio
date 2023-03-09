import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Experience from "./Experience";
import Skills from "./Skills";
import Education from "./Education";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import gsIcon from "./GS.ico";
import { Link as ScrollLink } from "react-scroll";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="header">
          <nav>
            <ul className="header__nav">
              {/* <li>
                <ScrollLink to="home-section" smooth={true} duration={500}>
                  Home
                </ScrollLink>
              </li> */}
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
                  to="about-me-section"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-60}
                >
                  About
                </ScrollLink>
              </li>
              {/* <li>
                <Link to="/experience">Experience</Link>
              </li> */}
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
    </BrowserRouter>
  );
}

export default App;
