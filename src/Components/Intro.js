import React from "react";
import ScrollToSectionButton from "../Helpers/ScrollToSectionButton";
import { TypeAnimation } from "react-type-animation";
import { useSpring, animated } from "react-spring";

const Intro = () => {
  const nameProps = useSpring({
    from: { opacity: 0},
    to: { opacity: 1},
    delay: 1000,
    config: { duration: 1000 },
  });
  
  const helloProps = useSpring({
    from: { opacity: 0},
    to: { opacity: 1},
    config: { duration: 1000 },

  });

  const tagLineProps = useSpring({
    from: { opacity: 0},
    to: { opacity: 1},
    delay: 2000,
    config: { duration: 1000 },
  });

  return (
    <div className="body">
      <div className="contentStyle">
        <animated.div style={helloProps} className="courier">Hi, my name is</animated.div>
        <br />
        <animated.h1 style={nameProps} className="my-name">
          Greeshma Sunil
        </animated.h1>
        <animated.div style={tagLineProps}  className="tagline">
          <TypeAnimation
            sequence={[
              "Conversational AI Developer",
              2000,
              "AI & Automation Engineer",
              2000,
              "Solution Designer",
              2000,
              "Technical Consultant",
              2000,
              "Software Engineer",
              2000,
              () => {},
            ]}
            cursor={true}
            repeat={Infinity}
          />
        </animated.div>
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
