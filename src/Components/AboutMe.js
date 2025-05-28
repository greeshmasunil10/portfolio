import React from "react";
import ScrollToSectionButton from "../Helpers/ScrollToSectionButton";

const AboutMe = () => {
  return (
    <div className="body">
      <h2 className="heading">About</h2>
      <div className="contentStyle">
        <div
          className="courier"
        // style={{ fontSize: "40px", display: "inline" }}
        >
          .me
        </div>

        <div className="content">
  I’m a Conversational AI Developer with a master’s degree in Computer Science and a strong foundation in modern full-stack development. I specialize in designing and deploying intelligent self-service solutions - both voice and chatbots across cloud contact center (CCaaS) platforms.

  <p />

  My work focuses on developing and supporting AI-driven virtual agents using tools such as Five9 Studio, Five9 VCC, Google Dialogflow, Google STT, JavaScript, and REST APIs. I design scalable conversation flows that prioritize accurate intent detection, advanced speech recognition, dynamic backend integrations, and seamless agent hand-offs.

  <p />

  I’ve led solution discovery, collaborated with cross-functional teams to align designs with enterprise goals, and delivered customized voice IVR/IVAs and chatbot applications tailored to business needs. From building logic-driven call flows to performing UAT, handling API-based integrations, and supporting go-live, I’ve played a key role in optimizing customer experience through automation.

  <p />

  Currently, I’m expanding my expertise by building and testing intelligent agent solutions on other CCaaS platforms including Amazon Connect, Genesys Cloud CX, and Zoom Contact Center, broadening my ability to deliver omnichannel conversational experiences.

  <p />

</div>


      </div>
      <div>
        <ScrollToSectionButton
          sectionId="projects-section"
          buttonName="See My Experiments."
        />
        {/* 
      <Link to="/MyWork">
        <button class="btn">See my work.</button>
      </Link> */}
      </div>
    </div>
  );
};

export default AboutMe;
