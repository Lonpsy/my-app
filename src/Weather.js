import React, { useState } from "react";
import "./Weather.css";
import "./WeatherInfor.js";
import axios from "axios";
import WeatherInfor from "./WeatherInfor";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
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
  function handleSearch(event) {
    event.preventDefault();
    let apiKey = "da7a1b3d460dbtbf7b304o1bb99604f1";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="WeatherArea">
        <form className="mb-3" onSubmit={handleSearch}>
          <div className="row">
            <div className="col-9">
              <input
                onChange={updateCity}
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
        <WeatherInfor data={weatherData} />
      </div>
    );
  } else {
    return "Loading...";
  }
}
