import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let [city, setCity] = useState(null);
  let [description, setDescription] = useState(null);
  let [temperature, setTemperature] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);
  let [result, setResult] = useState(false);

  function currentWeather(response) {
    setDescription(response.data.weather[0].description);
    setTemperature(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    setResult(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8c52e04f20e2246bd2fa1beb9972163c&units=metric`;
    axios.get(url).then(currentWeather);
  }

  function searchCity(event) {
    setCity(event.target.value);
    setResult(false);
  }

  if (result) {
    return (
      <div className="Weather">
        <div className="searchBox">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter City"
              onChange={searchCity}
            />
            <input type="submit" value="Search" />
          </form>
          <h3>{city}</h3>
        </div>
        <div className="descriptionBox">
          <p>
            <strong>Description:</strong> {description}
          </p>
          <p>
            <strong>Temperature:</strong> {Math.round(temperature)}ºC
          </p>
          <p>
            <strong>Humidity:</strong> {humidity}%
          </p>
          <p>
            <strong>Wind:</strong> {wind}m/s
          </p>
          <img src={icon} alt="weather" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="Weather">
        <div className="searchBox">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter City"
              onChange={searchCity}
            />
            <input type="submit" value="Search" />
          </form>
        </div>
      </div>
    );
  }
}
