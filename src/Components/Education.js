import React from "react";

const Education = () => (
  <div className="body">
    <h2 className="heading">Education</h2>
    <ul className="contentStyle">
      <li>
        <div className="content" style={{fontWeight:"bold", fontSize:"1.2rem"}}>
          Master of Applied Computer Science - Concordia University, Montreal
        </div>

        <ul>
          <li>
            <p className="courier">
              Algorithm Design Techniques, Distributed Systems, Artificial
              Intelligence
            </p>
          </li>
        </ul>
      </li>
      <li>
        <div className="content" style={{fontWeight:"bold", fontSize:"1.2rem"}}>
          Bachelor of Technology in Computer Science - VIT University, Vellore
        </div>
        <ul>
          <li>
            <p className="courier">
              Data Structures, Database Systems, Software Engineering, Web
              Programming
            </p>
          </li>
        </ul>
      </li>
    </ul>
  </div>
);
export default Education;
