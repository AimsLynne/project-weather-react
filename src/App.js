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
          </a>
        </footer>
      </div>
    </div>
  );
}
