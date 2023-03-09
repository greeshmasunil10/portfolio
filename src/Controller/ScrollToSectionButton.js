import React from "react";

const ScrollToSectionButton = ({ sectionId="about-me-section", buttonName ="Learn More" }) => {
  const handleClickScroll = () => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      className="btn"
      onClick={() => handleClickScroll(sectionId, buttonName)}
    >
      {buttonName}
    </button>
  );
};

export default ScrollToSectionButton;
