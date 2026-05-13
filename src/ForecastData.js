import React from "react";

export default function ForecastData(props) {
  let minTemperature = Math.round(props.data.daily[0].temperature.minimum);
  let maxTemperature = Math.round(props.data.daily[0].temperature.maximum);
  let iconUrl = props.data.daily[0].condition.icon_url;
  let date = new Date(props.data.daily[0].time * 1000);
  function day(date) {
    let actualDay = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[actualDay];
  }

  return (
    <div>
      <ul className=" forecast-row row">
        <li>{day(date)}</li>
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
