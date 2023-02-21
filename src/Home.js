import React from "react";
import { Link } from "react-router-dom";
import AboutMe from "./AboutMe";
import Experience from "./Experience";

const Home = () => (
  <div class="body">
    {/* <div class="courier" style={{ fontSize: 35 }}>
      .(under contruction)
    </div> */}
    <br />
    <br />
    <div style={{ fontSize: "35px" }}>
      Welcome to my portfolio website!
      <p />
    </div>
    <div class="courier">hi, my name is</div>

    <h2>GREESHMA SUNIL</h2>
    {/* <h2 class="dark">imagine. engineer. excel.</h2> */}
    <div class="contentStyle">
      <div class="content" style={{ color: "#808594" }}>
        I am a software developer dedicated to solving challenges and making a
        positive impact through technology.
      </div>
    </div>
    <p />
    <div>
      <Link to="/AboutMe">
        <button class="btn">Learn more about me.</button>
      </Link>
    </div>

    {/* <AboutMe/> */}
    {/* <Experience/> */}
  </div>
);

export default Home;
