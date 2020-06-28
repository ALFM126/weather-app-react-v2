import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="Temperature">
        <span className="value">Temperature: {Math.round(props.celsius)} </span>
        <span className="metric">
          ºC |{" "}
          <a href="/" onClick={displayFahrenheit}>
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="Temperature">
        <span className="value">
          Temperature: {Math.round((props.celsius * 9) / 5 + 32)}{" "}
        </span>
        <span className="metric">
          <a href="/" onClick={displayCelsius}>
            ºC
          </a>{" "}
          | ºF
        </span>
      </div>
    );
  }
}
