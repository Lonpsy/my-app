import React from "react";
import "./WeatherForcast.css";
export default function WeatherForcast(props) {
  return (
    <div className="WeatherForcast">
      <ul className=" forecast-row row">
        <li>Mon </li>
        <li className="forecast-icon">❄️</li>{" "}
        <li className="forecast-temperatures">
          <span className="forecast-temperature-max">14°</span>
          <span className="forecast-temperature-min">1°</span>
        </li>
      </ul>
    </div>
  );
}
