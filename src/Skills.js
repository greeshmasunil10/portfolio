import React from "react";

const Skills = () => (
  <div className="skills">
    <h2 style={{ textAlign: "center" }}>Skills</h2>
    <div class="contentStyle"  >
    <ul className="skills-list">
      <li className="skills-list-item">
        <span className="skills-list-title">Programming Languages</span>: Java,
        JavaScript, Python, HTML5, CSS, PHP, XML, JSON
      </li>
      <li className="skills-list-item">
        <span className="skills-list-title">Frameworks</span>: Node.js,
        Express.js, React, Redux, Bootstrap, jQuery
      </li>
      <li className="skills-list-item">
        <span className="skills-list-title">API Development and Testing</span>:
        REST APIs, Dialogflow, Swagger, Postman, GraphQL
      </li>
      <li className="skills-list-item">
        <span className="skills-list-title">Industry Knowledge</span>: Design
        Patterns, MVC, Agile Methodologies, Machine Learning, Algorithm Designs,
        Natural Language Processing
      </li>
      <li className="skills-list-item">
        <span className="skills-list-title">
          Project Management and Collaboration
        </span>
        : Jira, Git, GitHub, Slack, Microsoft Teams
      </li>
      <li className="skills-list-item">
        <span className="skills-list-title">Database</span>: MySQL, MongoDB
      </li>
    </ul>
    </div>
  </div>
);
export default Skills;
