import React from "react";
import winterlyImg from "../Images/winterly.jpg";
import holyGuidanceImg from "../Images/holyguidance.jpg";
import lottoMaxImg from "../Images/lottomax.jpg";
import ProjectCard from "../Layouts/ProjectCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArchive, faFileClipboard } from "@fortawesome/free-regular-svg-icons";


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
            projectDescription="Holy Guidance is an app that provides
            Bible-based advice and verses for your personal struggles. Using
            OpenAI's powerful language processing capabilities, Holy Guidance
            analyzes your input and generates meaningful responses that are
            rooted in biblical teachings. With Holy Guidance, you can be sure
            that the advice and guidance you receive are not only personalized,
            but also rooted in the timeless wisdom of the Bible. Try it out
            today and see how it can help you navigate life's challenges."
          />

          <br />

          <ProjectCard
            projectName="Winterly eCommerce Platform"
            technologiesUsed="React, Node, Express, MongoDB, REST API, JSX, Bootstrap4, Git"
            liveAppLink="https://winter-ly.herokuapp.com"
            imageSrc={winterlyImg}
            altText="View Live App"
            projectDescription="A fully functional e-commerce platform deployed on Heroku cloud servers for production. The frontend is built using React and Bootstrap 4, and it is integrated with Braintree for credit card and PayPal payments."
          />
          <br />

          <ProjectCard
            projectName="Lotto Max Analyzer"
            technologiesUsed="Python, Flask, React,
            BeautifulSoup, numpy, matplotlib"
            liveAppLink="https://lottomax-analyser-fe.herokuapp.com/"
            imageSrc={lottoMaxImg}
            projectDescription="A tool for analyzing the results of
            the Canadian Lotto Max lottery, consisting of a data scraper that
            extracts the winning numbers and an analysis script that performs
            basic statistical analysis on the numbers. The frontend is built
            using React and the backend is built using Python with Flask as the
            web framework."
          />

          <br />

          <ProjectCard
            projectName="RISK World Conquest Game"
            technologiesUsed="Java, Swing, JUnit, Design
            Patterns, Multithreading, Git"
            liveAppLink="https://github.com/greeshmasunil10"
            projectDescription="A strategy board game based on Java,
            utilizing design patterns such as MVC and Observer pattern for loose
            coupling between objects and Strategy pattern for implementing bot
            players."
            appURLText="View on Github"
            imageLabelOpacity="1"
          />

          <br />

          <p style={{fontSize:"25px", fontWeight:"bold"}}>
          <FontAwesomeIcon icon={faFileClipboard} />  More projects on{" "}
            <a href="https://github.com/greeshmasunil10" target="_blank" style={{display:"inline-block", textDecoration:"underline"}}>
              Github
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
