import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const ScrollToSectionButton = ({
  sectionId = "about-me-section",
  buttonName = "Learn More",
}) => {
  const { ref, inView } = useInView();
  const buttonProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: inView ? 1 : 0 },
    // delay: 1000,
    // config: { duration: 1000 },
  });

  const handleClickScroll = () => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <animated.button
      style={buttonProps}
      ref={ref}
      className="btn"
      onClick={() => handleClickScroll(sectionId, buttonName)}
    >
      {buttonName}
    </animated.button>
  );
};

export default ScrollToSectionButton;
