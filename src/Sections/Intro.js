import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ScrollToSectionButton from "../Helpers/ScrollToSectionButton";

const Intro = () => {
  return (
    <div className="body">
      <div className="">
      <br />
      <br />
      <h2>
        Welcome to my portfolio website!
        <p />
      </h2>
      <div className="courier">hi, my name is</div>

      <h2 className="heading">GREESHMA SUNIL</h2>
      <div className="contentStyle">
        <div className="content">
          I am a software developer dedicated to solving challenges and making a
          positive impact through technology.
        </div>
      </div>
      <p />
      <div style={{ paddingTop: "20px" }}>
        <ScrollToSectionButton
          sectionId="about-me-section"
          buttonName="Learn more about me"
        />
      </div>
    </div></div>
  );
};

export default Intro;
