import React from "react";
import gsIcon from "../Images/GS.ico";
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
  return (
    <nav>
            <ul className="header__nav">
              {/* <li>
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
              </li> */}
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
                  Things I’ve Built for fun
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
                  to="contact-me-section"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-60}
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </nav>
  );
};

export default NavBar;
