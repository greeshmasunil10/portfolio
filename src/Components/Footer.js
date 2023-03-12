import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <footer>
    <div>
      <a
        href="https://github.com/greeshmasunil10/portfolio"
        target="_blank"
        rel="noreferrer"
        style={{ display: "inline-block", padding: "10px" }}
      >
        {" "}
        <FontAwesomeIcon icon={faStar} /> Designed and Built by Greeshma
        Sunil{" "}
      </a>
    </div>
  </footer>
  );
};

export default Footer;
