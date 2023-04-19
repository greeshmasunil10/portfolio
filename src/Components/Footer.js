import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import {GITHUB_TOKEN} from "../config"

const Footer = () => {
  const [clones, setClones] = useState(null);
  const [views, setViews] = useState(null);

  useEffect(() => {
    const url = "https://api.github.com/repos/greeshmasunil10/portfolio/traffic/clones?per=day";
   
    fetch(url, {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        // "X-GitHub-Api-Version": "2022-11-28",
      },
      mode: 'cors', 
    })
      .then((response) => response.json())
      .then((data) => setClones(data.count))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const url = "https://api.github.com/repos/greeshmasunil10/portfolio/traffic/views?per=day";
   
    fetch(url, {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        // "X-GitHub-Api-Version": "2022-11-28",
      },
      mode: 'cors', 
    })
      .then((response) => response.json())
      .then((data) => setViews(data.count))
      .catch((error) => console.error(error));
  }, []);

  return (
    <footer>
      <div>
        <a
          href="https://github.com/greeshmasunil10/portfolio"
          target="_blank"
          rel="noreferrer"
          style={{ display: "inline-block", padding: "10px" }}
        >
          <FontAwesomeIcon icon={faStar} /> Designed and Built by Greeshma Sunil
          {clones && (
            <span style={{ marginLeft: "10px"}}>
              | {clones} Clones
            </span>
          )}
          {views && (
            <span style={{ marginLeft: "10px"}}>
              | {views} Views | Weekly Stats
            </span>
          )}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
