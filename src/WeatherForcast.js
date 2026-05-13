import React, { useState } from "react";
import "./WeatherForcast.css";
import axios from "axios";
import ForecastData from "./ForecastData";

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
    return (
      <div className="WeatherForcast row">
        {forecast.daily.map(function (dailyForecast, index) {
          if (index < 4) {
            return (
              <div className="col">
                <ForecastData data={dailyForecast} key={index} />
              </div>
            );
          } else {
            return null;
          }
        })}
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
