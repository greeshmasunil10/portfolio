import React, { useState, useEffect, lazy, Suspense } from "react";
import "./Styles/App.css";
import "./Styles/Animations.css";
import "./Styles/Bulb.css";
import Home from "./Home";
import Footer from "./Components/Footer";
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
            
            <Home />
          </div>
          <Footer />
        </Suspense>
      )}
    </div>
  );
};

export default App;
