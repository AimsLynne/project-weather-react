import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project was created by Amy Brown and is{" "}
          <a
            href="https://github.com/AimsLynne/project-weather-react"
            target="blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github
          </a>{" "}
          and is{" "}
          <a
            href="https://app.netlify.com/sites/legendary-mousse-094370/overview"
            target="blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
