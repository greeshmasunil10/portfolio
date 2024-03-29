import React from "react";

function ProjectCard(props) {
  return (
    <div
      className="section"
      style={{
        padding: "30px",
        minHeight: "fit-content",
        backgroundColor: "var(--bg-grad-4)",
      }}
    >
      <div>
        {" "}
        <div className="courier" style={{ fontSize: "25px", padding: "5px" }}>
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
        <a
          className="img-url-label"
          href="https://winter-ly.herokuapp.com"
          target="_blank"
          rel="noreferrer" 
        >
          {props.appURLText}
        </a>
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
