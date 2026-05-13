import React from "react";
import "./WeatherForcast.css";

export default function ForecastData(props) {
  let minTemperature = Math.round(props.data.temperature.minimum);
  let maxTemperature = Math.round(props.data.temperature.maximum);
  let iconUrl = props.data.condition.icon_url;
  let date = new Date(props.data.time * 1000);
  function day(date) {
    let actualDay = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[actualDay];
  }

  return (
    <div className="ForecastData">
      <div className=" forecast-row row">
        <div>{day(date)}</div>
        <div className="forecast-icon">
          {" "}
          <img src={iconUrl} alt="weather-emoji" />{" "}
        </div>{" "}
        <div className="forecast-temperatures">
          <span className="forecast-temperature-max">{maxTemperature}°</span>
          <span className="forecast-temperature-min">{minTemperature}°</span>
        </div>
      </div>
    </div>
  );
}
