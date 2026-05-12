import React, { useState } from "react";
import "./WeatherInfor.js";

export default function DisplayUnit(props) {
  const [temperatureUnit, setTemperatureUnit] = useState("celsius");

  function showCelsius(event) {
    event.preventDefault();
    setTemperatureUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setTemperatureUnit("fahrenheit");
  }

  let temperature = props.data.temperature;

  if (temperatureUnit === "fahrenheit") {
    temperature = Math.round((props.data.temperature * 9) / 5 + 32);
  }
  if (temperatureUnit === "celsius") {
    temperature = props.data.temperature;
  } else {
    temperature = Math.round((props.data.temperature * 9) / 5 + 32);
  }

  return (
    <div>
      <span className="col-6 Temperature">{temperature}</span>
      <span className="Unit">
        <a href="/" className="text-decoration-none" onClick={showCelsius}>
          °C |
        </a>{" "}
        <a href="/" className="text-decoration-none" onClick={showFahrenheit}>
          °F
        </a>
      </span>
    </div>
  );
}
