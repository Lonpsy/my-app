import React, { useState } from "react";
import "./WeatherForcast.css";
import axios from "axios";

export default function WeatherForcast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  const [coordinates, setCoordinates] = useState(props.coordinates);

  function handleResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }
  if (
    props.coordinates.latitude !== coordinates.latitude ||
    props.coordinates.longitude !== coordinates.longitude
  ) {
    setLoaded(false);
    setCoordinates(props.coordinates);
  }

  if (loaded) {
    console.log(forecast);
    let minTemperature = Math.round(forecast.daily[0].temperature.minimum);
    let maxTemperature = Math.round(forecast.daily[0].temperature.maximum);
    let iconUrl = forecast.daily[0].condition.icon_url;
    return (
      <div className="WeatherForcast">
        <ul className=" forecast-row row">
          <li>Mon </li>
          <li className="forecast-icon">
            {" "}
            <img src={iconUrl} alt="weather-emoji" />{" "}
          </li>{" "}
          <li className="forecast-temperatures">
            <span className="forecast-temperature-max">{maxTemperature}°</span>
            <span className="forecast-temperature-min">{minTemperature}°</span>
          </li>
        </ul>
      </div>
    );
  } else {
    let latitude = props.coordinates.latitude;
    let longitude = props.coordinates.longitude;
    let apiKey = "da7a1b3d460dbtbf7b304o1bb99604f1";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
