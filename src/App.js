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
          >
            open-sourced on Github
          </a>{" "}
          and is{" "}
          <a href="https://legendary-mousse-094370.netlify.app/" target="blank">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
