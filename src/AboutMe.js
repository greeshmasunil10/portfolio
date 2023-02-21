import React from "react";
import { Link } from "react-router-dom";


const AboutMe = () => {
  return (
    <div class="body">
      <h2>About</h2>
      <div class="contentStyle">
        <div class="courier" style={{ fontSize: "40px", display: "inline" }}>
          .me
        </div>
        <div class="content">
        My expertise in computer science extends to a master's degree, and I find great satisfaction in the art of coding and bringing ideas to life. 
        <p/>With a strong foundation in programming languages such as Java, Python, JavaScript, React.js, and Node.js, I have
          honed my skills through hands-on experience working with a range of cutting-edge technologies.
          <p />
          But I'm more than just a code monkey. I'm a problem solver at heart,
          always seeking out new and innovative ways to improve the lives of my clients 
          and make a positive impact.
          <p />
        </div>
      </div>
      <div>
      <Link to="/MyWork">
        <button class="btn">See my work.</button>
      </Link>
    </div>
      
    </div>
  );
};

export default AboutMe;
