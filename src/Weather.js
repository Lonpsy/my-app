import React from "react";
import "./Weather.css";

export default function Weather() {
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
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
