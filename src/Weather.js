import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="WeatherArea">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              className="form-control"
              placeholder="Search for a city temperature..."
            />
          </div>{" "}
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>{" "}
      <h1 className="col-3 mt-3">London</h1>{" "}
      <ul className="col-3">
        <li>Monday 10:00am</li>
        <li>Sunny </li>
      </ul>
      <ul className="row">
        <li className="col-3">
          {" "}
          <img
            src="https://www.gstatic.com/weather/conditions/v1/svg/partly_cloudy_light.svg"
            alt="weather-emoji"
          />{" "}
          <h2 className="col-6">13°C</h2>
        </li>{" "}
        <div className="col 9 ">
          <div>Precipitation: 3%</div> <div>Humidity: 36%</div>{" "}
          <div>Wind: 3 m/s</div>
        </div>
      </ul>
    </div>
  );
}
