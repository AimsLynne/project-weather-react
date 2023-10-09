import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              input="search"
              placejolder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input input="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>London</h1>
      <ul>
        <li>Monday 08:00</li>
        <li>Mostly Clear</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://duckduckgo.com/assets/weather/icons/weatherkit/MostlyClear-night.svg"
            alt="Mostly Clear"
          ></img>
          6°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 70%</li>
            <li>Wind: 6 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
