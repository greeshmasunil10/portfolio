import React from "react";
import winterlyImg from "../Images/winterly.jpg";
import holyGuidanceImg from "../Images/holyguidance.jpg";
import lottoMaxImg from "../Images/lottomax.jpg";
import ProjectCard from "../Layouts/ProjectCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileArchive,
  faFileClipboard,
} from "@fortawesome/free-regular-svg-icons";

function Projects() {
  return (
    <div className="body">
      <h2 className="heading">Projects</h2>
      <div className="contentStyle">
        <div className="content">
          <ProjectCard
            projectName="Holy Guidance"
            technologiesUsed="Python, Flask, React, OpenAI"
            liveAppLink="http://holy-guidance-fe.herokuapp.com/"
            imageSrc={holyGuidanceImg}
            projectDescription="<strong>Holy Guidance</strong> is a unique app that offers <strong>Bible-based
            advice</strong> and verses to help you deal with personal struggles. The app leverages
            <strong>OpenAI's</strong> powerful language processing capabilities to analyze your input and
            generate <strong>personalized responses</strong> that are rooted in biblical teachings. With Holy Guidance,
            you can receive <strong>meaningful guidance</strong> that is not only personalized but also aligned with the
            timeless wisdom of the Bible. Give it a try today and discover how it can help you <strong>navigate life's
            challenges</strong> with confidence."
          />

          <br />

          <ProjectCard
            projectName="Winterly eCommerce Platform"
            technologiesUsed="React, Node, Express, MongoDB, REST API, JSX, Bootstrap4, Git"
            liveAppLink="https://winter-ly.herokuapp.com"
            imageSrc={winterlyImg}
            altText="View Live App"
            projectDescription="<strong>Winterly</strong> is a fully functional e-commerce website that utilizes <strong>REST API</strong> with <strong>Node.js</strong> and <strong>Express</strong> for the backend, and <strong>MongoDB</strong> for the database. The frontend is built using <strong>React</strong> and <strong>Bootstrap</strong>, and it is integrated with <strong>Braintree</strong> to facilitate payments via credit card and PayPal.
            "
          />
          <br />

          <ProjectCard
            projectName="Lotto Max Analyzer"
            technologiesUsed="Python, Flask, React,
            BeautifulSoup, numpy, matplotlib"
            liveAppLink="https://lottomax-analyser-fe.herokuapp.com/"
            imageSrc={lottoMaxImg}
            projectDescription="<strong>Lotto Max Analyzer</strong> is a powerful tool for analyzing the results of the Canadian Lotto Max lottery. It includes a <strong>data scraper</strong> that extracts the winning numbers and an <strong>analysis script</strong> that performs basic statistical analysis on the numbers. The frontend is built using <strong>React</strong>, while the backend is built using <strong>Python</strong> with <strong>Flask</strong> as the web framework. With Lotto Max Analyzer, you can gain valuable insights into the lottery."
          />

          <br />

          <ProjectCard
            projectName="RISK World Conquest Game"
            technologiesUsed="Java, Swing, JUnit, Design
            Patterns, Multithreading, Git"
            liveAppLink="https://github.com/greeshmasunil10"
            projectDescription="<strong>Java-based strategy board game</strong> designed with key <strong>software development principles</strong> in mind. It utilizes the <strong>MVC</strong> and <strong>Observer patterns</strong> to promote loose coupling between objects, and the <strong>Strategy pattern</strong> to implement intelligent bot players. This approach ensures that the game is <strong>flexible</strong>, <strong>maintainable</strong>, and <strong>scalable</strong>."
            appURLText="View on Github"
            imageLabelOpacity="1"
          />

          <br />

          <p style={{ fontSize: "25px", fontWeight: "bold" }}>
            <FontAwesomeIcon icon={faFileClipboard} /> More projects on{" "}
            <a
              href="https://github.com/greeshmasunil10"
              target="_blank"
              style={{ display: "inline-block", textDecoration: "underline" }}
            >
              Github
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
