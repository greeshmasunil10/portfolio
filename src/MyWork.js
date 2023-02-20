import React from "react";

function MyWork() {
  return (
    <div class="body">
      <h2>Projects</h2>
      <div class="contentStyle">
        <div class="content">
        <h3>Holy Guidance</h3>
          <div>
            <strong>Technologies used:</strong> Python, Flask, React, OpenAI
          </div>
          <div>
            <strong>Project description:</strong> Holy Guidance is an app that
            provides Bible-based advice and verses for your personal struggles.
            Using OpenAI's powerful language processing capabilities, Holy
            Guidance analyzes your input and generates meaningful responses that
            are rooted in biblical teachings. With Holy Guidance, you can be
            sure that the advice and guidance you receive are not only
            personalized, but also rooted in the timeless wisdom of the Bible.
            Try it out today and see how it can help you navigate life's
            challenges.
          </div>
          <a href="http://holy-guidance-fe.herokuapp.com/" target="_blank">Live App</a>
          
          <br />
          <br />
          <h3>Winterly eCommerce Platform</h3>
          <div>
            <strong>Technologies used:</strong> React, Node, Express, MongoDB,
            REST API, JSX, Bootstrap4, Git
            <p />
            <strong>Project description:</strong> A fully functional e-commerce
            platform deployed on Heroku cloud servers for production. The
            frontend is built using React and Bootstrap 4, and it is integrated
            with Braintree for credit card and PayPal payments.
          </div>
          <a href="https://winter-ly.herokuapp.com" target="_blank">Live App</a>
          {/* <a href="https://winter-ly.herokuapp.com">
            <img src=".\winterly.jpg" />
          </a> */}

          <br />
          <br />
          <h3>Lotto Max Analyzer</h3>
          <div>
            <strong>Technologies used:</strong> Python, Flask, React,
            BeautifulSoup, numpy, matplotlib
          </div>
          <div>
            <strong>Project description:</strong> A tool for analyzing the
            results of the Canadian Lotto Max lottery, consisting of a data
            scraper that extracts the winning numbers and an analysis script
            that performs basic statistical analysis on the numbers. The
            frontend is built using React and the backend is built using Python
            with Flask as the web framework.
          </div>
          <a href="https://lottomax-analyser-fe.herokuapp.com/" target="_blank">Live App</a>

          <br />
          <br />
          <h3>RISK World Conquest Game</h3>
          <div>
            <strong>Technologies used:</strong> Java, Swing, JUnit, Design
            Patterns, Multithreading, Git
          </div>
          <div>
            <strong>Project description:</strong> A strategy board game based on
            Java, utilizing design patterns such as MVC and Observer pattern for
            loose coupling between objects and Strategy pattern for implementing
            bot players.
          </div>
          <a href="https://github.com/greeshmasunil10" target="_blank">GitHub</a>

          

          <br />
          <br />
          
        </div>
      </div>
    </div>
  );
}

export default MyWork;
