import React, { useEffect, useRef } from "react";

const ScrollToTopButton = ({ handleScrollTop }) => {
  const scrollTopRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 200) {
        scrollTopRef.current.style.display = "block";
      } else {
        scrollTopRef.current.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className="scroll-to-top-button"
      ref={scrollTopRef}
      onClick={handleScrollTop}
      title="Back to Top"
    >
      <p className="back-to-top">↑</p>
    </button>
  );
};

export default ScrollToTopButton;
