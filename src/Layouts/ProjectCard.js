import React from "react";

function ProjectCard(props) {
  return (
    <div>
      <p style={{ fontSize: 30 }}>{props.projectName}</p>
      <div>
        <strong>Technologies used:</strong> {props.technologiesUsed}
        <p />

        <a className="a-image" href={props.liveAppLink} style={{ position: "relative" }} target="_blank">
          <img
            src={props.imageSrc}
            class="app-img"
          />
          <span class="app-label"
          style={{opacity:`${props.imageLabelOpacity}`}}
          >{props.appURLText}</span>
        </a>
        <a
          className="img-url-label"
          href="https://winter-ly.herokuapp.com"
          target="_blank"
        >
          {props.appURLText}
        </a>
        
        <strong>Description:</strong> {props.projectDescription}
      </div>
    </div>
  );
}

ProjectCard.defaultProps = {
    liveAppLink: "https://github.com/greeshmasunil10", 
    appURLText: "Launch App", 
  };

export default ProjectCard;
