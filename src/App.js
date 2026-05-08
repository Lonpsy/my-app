import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      {" "}
      <div className="container">
        {" "}
        <h1>React-weather-app-project</h1> <Weather defaultCity="Gothenburg" />
        <footer>
          This project Coded by{" "}
          <a
            href="https://olalonpe-portfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Olalonpe Faith Festus-Ilesanmi
          </a>{" "}
          Open sourced on{" "}
          <a
            href="https://github.com/Lonpsy/my-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>{" "}
          hosted on{" "}
          <a
            href="https://weather-instant.netlify.app//"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
