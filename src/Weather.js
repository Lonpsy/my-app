import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      iconUrl: response.data.condition.icon_url,
      date: new Date(response.data.time * 1000),
    });
  }
  if (weatherData.ready) {
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
        <div className=" City col-3">{props.defaultCity}</div>{" "}
        <ul className="col-3">
          <li>Monday 10:00am</li>
          <li>{weatherData.description}</li>
          <img src={weatherData.iconUrl} alt="weather-emoji" />{" "}
        </ul>
        <ul className="row">
          <li className="col-3">
            {" "}
            <span className="col-6 Temperature">{weatherData.temperature}</span>
            <span className="Unit">°C</span>
          </li>{" "}
          <div className="col-9 ">
            <div>Precipitation: 3%</div>{" "}
            <div>Humidity: {weatherData.humidity}%</div>{" "}
            <div>Wind: {weatherData.wind} m/s</div>
          </div>
        </ul>
      </div>
    );
  } else {
    let apiKey = "da7a1b3d460dbtbf7b304o1bb99604f1";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
