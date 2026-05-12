import React from "react";
import FormattedDate from "./FormattedDate";
import DisplayUnit from "./DisplayUnit";

export default function WeatherInfor(props) {
  return (
    <div className="WeatherInfor">
      <div className=" City col-3">{props.data.city}</div>{" "}
      <ul className="col-3">
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
        <img src={props.data.iconUrl} alt="weather-emoji" />{" "}
      </ul>
      <ul className="row">
        <li className="col-3">
          {" "}
          <DisplayUnit data={props.data} />
        </li>{" "}
        <div className="col-9 ">
          <div>Precipitation: 3%</div>{" "}
          <div>Humidity: {props.data.humidity}%</div>{" "}
        </div>{" "}
      </ul>
    </div>
  );
}
