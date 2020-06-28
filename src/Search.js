import React, { useState } from "react";
import Weather from "./Weather";
import axios from "axios";
import "./Search.css";

export default function Search(props) {
  const [city, setCity] = useState(props.city);
  const [details, setDetails] = useState({ ready: false });

  function currentWeather(response) {
    setDetails({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    const apiKey = "8c52e04f20e2246bd2fa1beb9972163c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(currentWeather);
  }

  function updateData(event) {
    event.preventDefault();
    search();
  }

  function searchCity(event) {
    setCity(event.target.value);
  }

  if (details.ready) {
    return (
      <div className="Weather">
        <form onSubmit={updateData}>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="City Name"
                className="form-control"
                autoFocus="on"
                onChange={searchCity}
              ></input>
            </div>
            <div className="col-4">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary"
              ></input>
            </div>
          </div>
        </form>
        <Weather info={details} />
      </div>
    );
  } else {
    search();
    return <p>Fetching Data...</p>;
  }
}
