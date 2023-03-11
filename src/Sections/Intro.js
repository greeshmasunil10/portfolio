import React, { useEffect, useRef } from "react";
import ScrollToSectionButton from "../Helpers/ScrollToSectionButton";
import { TypeAnimation } from "react-type-animation";

const Intro = () => {
  return (
    <div className="body">
      <div className="intro">
        <div className="courier">hi, my name is</div>
        <br />
        <h1 className="my-name">Greeshma Sunil</h1>
        <div className="contentStyle">
          <div className="tagline">
            <TypeAnimation
              sequence={[
                "Software Engineer",
                1000,
                "Problem Solver",
                2000,
                "Creative coder",
                2000,
                () => {},
              ]}
              cursor={true}
              repeat={Infinity}
              // style={{fontSize:"40px"}}
              
            />
          </div>
        </div>
        <p />
        <div style={{ paddingTop: "20px" }}>
          <ScrollToSectionButton
            sectionId="about-me-section"
            buttonName="Learn more about me"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
