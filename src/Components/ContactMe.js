import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const ContactMe = () => {
  return (
    <div className="contact-me">
      <div className="container">
        <div className="body">Let's chat?</div>

        <div>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/greeshma-sunil/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="mailto:snlgreeshma@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              href="https://github.com/greeshmasunil10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>

          {/* <div className="section" style={{ maxHeight: "10px" }}>
            <a
              href="https://github.com/greeshmasunil10/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faStar} /> <div>Star my repository</div>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
