import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div class="body">

    <div class="courier" style={{fontSize:50}}>.(under contruction)</div><br/><br/>
    <div class="courier">hi, my name is</div>

    <h2>GREESHMA SUNIL</h2>
    {/* <h2 class="dark">imagine. engineer. excel.</h2> */}
    <div class="contentStyle">
      <div class="content" style={{color:"#808594"}}>

          I am a software developer who is constantly
          seeking new challenges.

      </div>
    </div>

    <div>
      <Link to="/AboutMe">
        <button class="btn">Learn more about me.</button>
      </Link>
    </div>
  </div>
);

export default Home;
