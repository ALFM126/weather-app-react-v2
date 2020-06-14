import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="current-weather">
        <h1>Weather Search Engine</h1>
        <Weather />
      </div>
      <div className="footer">
        <small>
          <a href="https://github.com/ALFM126/weather-app-react-v2">
            Open source Code on GitHub
          </a>{" "}
          by <a href="https://github.com/ALFM126">ALFM126</a>
        </small>
      </div>
    </div>
  );
}
