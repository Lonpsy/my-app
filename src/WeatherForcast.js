import React from "react";
import "./WeatherForcast.css";
import axios from "axios";
export default function WeatherForcast(props) {
  function handleResponse(response) {
    console.log(response.data.coordinates.longitude);
    console.log(response.data.coordinates.latitude);
  }

  let latitude = props.coordinates.latitude;
  let longitude = props.coordinates.longitude;
  let apiKey = "da7a1b3d460dbtbf7b304o1bb99604f1";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
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
