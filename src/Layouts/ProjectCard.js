import React from "react";

function ProjectCard(props) {
  return (
    <div
      className="project-card"
      style={{
        padding: "30px",
        minHeight: "fit-content",
        backgroundColor: "var(--project-card-bg)",
      }}
    >
      <div>
        {" "}
        <div className="courier" style={{ fontSize: "25px", padding: "0px" }}>
          {props.projectName}
        </div>
        <strong>Technologies used:</strong> {props.technologiesUsed}
        <p />
        <a
          className="a-image"
          href={props.liveAppLink}
          style={{ position: "relative" }}
          target="_blank"
          rel="noreferrer"
        >
          <img src={props.imageSrc} class="app-img"/>
          <span
            className="app-label"
            style={{ opacity: `${props.imageLabelOpacity}` }}
          >
            {props.appURLText}
          </span>
        </a>
        {/* <a
          className="img-url-label"
          href="https://winter-ly.herokuapp.com"
          target="_blank"
          rel="noreferrer" 
        >
          {props.appURLText}
        </a> */}
        {props.imageLabelOpacity === "1" && (
  <a
    className="img-url-label"
    href={props.liveAppLink}
    target="_blank"
    rel="noreferrer"
  >
    {props.appURLText}
  </a>
)}

        <div className=""
          dangerouslySetInnerHTML={{ __html: props.projectDescription }}
        ></div>{" "}
      </div>
    </div>
  );
}

ProjectCard.defaultProps = {
  liveAppLink: "https://github.com/greeshmasunil10",
  appURLText: "View Demo",
};

export default ProjectCard;
