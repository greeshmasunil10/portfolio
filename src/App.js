import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Experience from "./Experience";
import Skills from "./Skills";
import Education from "./Education";
import AboutMe from "./AboutMe";
import gsIcon from './GS.ico';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="header">
        <img src={gsIcon} alt="GS Icon" style={{position: 'absolute', top: '0', left: '0', width: 75, height: 50, paddingLeft:10, paddingTop:10}}  />
          <nav>
            <ul className="header__nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/AboutMe">About</Link>
              </li>
              <li>
                <Link to="/experience">Experience</Link>
              </li>
              <li>
                <Link to="/skills">Skills</Link>
              </li>
              <li>
                <Link to="/education">Education</Link>
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
