import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const ContactMe = () => {
  return (
    <div className="contact-me">
      <div className="container">
        <div className="body">Let's Connect! 😊</div>

        <div>
          <div
            className="social-icons"
            style={{
              fontSize: "2rem",
              gap: "1.5rem",
              display: "flex",
              justifyContent: "center",
              margin: "1rem 0",
            }}
          >
            <a
              href="https://www.linkedin.com/in/greeshma-sunil/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="mailto:snlgreeshma@gmail.com" title="Email">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              href="https://github.com/greeshmasunil10"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <div
            style={{
              marginTop: "1.5rem",
              fontSize: "1.2rem",
              textAlign: "center",
            }}
          >
            Whether you have a question, a project idea, or just want to say hi, feel free to reach out anytime.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
