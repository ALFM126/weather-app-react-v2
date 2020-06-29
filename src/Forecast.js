import React, { useState } from "react";
import ForecastInfo from "./ForecastInfo";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  const [display, setDisplay] = useState(false);
  const [forecast, setForecast] = useState(null);

  function forecastWeather(response) {
    setForecast(response.data);
    setDisplay(true);
  }

  if (display && props.city === forecast.city.name) {
    return (
      <div className="Forecast row">
        <ForecastInfo data={forecast.list[7]} />
        <ForecastInfo data={forecast.list[14]} />
        <ForecastInfo data={forecast.list[21]} />
        <ForecastInfo data={forecast.list[28]} />
        <ForecastInfo data={forecast.list[35]} />
      </div>
    );
  } else {
    const apiKey = "8c52e04f20e2246bd2fa1beb9972163c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(forecastWeather);
    return null;
  }
}
