import React, { useState, useEffect, lazy, Suspense } from "react";
import "./Styles/App.css";
import "./Styles/Animations.css";
import "./Styles/Bulb.css";
import Home from "./Home";
import NavBar from "./Components/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import Lottie from "lottie-react";
import Animation from "./animation.json";

const App = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 2000); // set the timeout to 5000ms (5 seconds)
  }, []);

  return (
    <div>
      {!showContent ? (
        <div className="lottie-container">
          <Lottie animationData={Animation} loop={false} />
        </div>
      ) : (
      <Suspense
        fallback={
          <div className="lottie-container">
            <Lottie animationData={Animation} loop={true} />
          </div>
        }
      >
        <div className="App">
          <header className="header">
            <NavBar />
          </header>
          <Home />
        </div>
        <footer>
          <div>
            <a
              href="https://github.com/greeshmasunil10/portfolio"
              target="_blank"
              rel="noreferrer"
              style={{ display: "inline-block", padding: "10px" }}
            >
              {" "}
              <FontAwesomeIcon icon={faStar} /> Designed and Built by Greeshma
              Sunil{" "}
            </a>
          </div>
        </footer>
      </Suspense>
      )}
    </div>
  );
};

export default App;
