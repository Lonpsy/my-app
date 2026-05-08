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
              className=" btn w-100 allButtons"
            />
          </div>
        </div>
      </form>{" "}
      <div className=" City col-3">London</div>{" "}
      <ul className="col-3">
        <li>Monday 10:00am</li>
        <li>Sunny </li>
        <img
          src="https://www.gstatic.com/weather/conditions/v1/svg/partly_cloudy_light.svg"
          alt="weather-emoji"
        />{" "}
      </ul>
      <ul className="row">
        <li className="col-3">
          {" "}
          <span className="col-6 Temperature">13</span>
          <span className="Unit">°C</span>
        </li>{" "}
        <div className="col 9 ">
          <div>Precipitation: 3%</div> <div>Humidity: 36%</div>{" "}
          <div>Wind: 3 m/s</div>
        </div>
      </ul>
    </div>
  );
}
