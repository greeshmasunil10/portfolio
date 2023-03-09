import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ScrollToSectionButton from "./Controller/ScrollToSectionButton";

const Intro = () => {
  return (
      <div class="body">
        <br />
        <br />
        <div style={{ fontSize: "35px" }}>
          Welcome to my portfolio website!
          <p />
        </div>
        <div class="courier">hi, my name is</div>

        <h2>GREESHMA SUNIL</h2>
        <div class="contentStyle">
          <div class="content" style={{ color: "#808594" }}>
            I am a software developer dedicated to solving challenges and making
            a positive impact through technology.
          </div>
        </div>
        <p />
            <div style={{paddingTop:"20px"}}>
          <ScrollToSectionButton
            sectionId="about-me-section"
            buttonName="Learn more about me"
          />
        </div>

      </div>
  );
};

export default Intro;
