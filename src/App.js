import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was created by Amy Brown and is{" "}
          <a
            href="https://github.com/AimsLynne/project-weather-react"
            target="blank"
          >
            open-sourced
          </a>{" "}
          on Github
        </footer>
      </div>
    </div>
  );
}
