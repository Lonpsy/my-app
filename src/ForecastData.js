import React from "react";

export default function ForecastData(props) {
  let minTemperature = Math.round(props.data.daily[0].temperature.minimum);
  let maxTemperature = Math.round(props.data.daily[0].temperature.maximum);
  let iconUrl = props.data.daily[0].condition.icon_url;
  return (
    <div>
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
}
