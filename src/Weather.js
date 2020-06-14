import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The Weather in ${props.city} is ${response.data.main.temp}ºC`);
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=8c52e04f20e2246bd2fa1beb9972163c&units=metric`;
  axios.get(url).then(handleResponse);
  return (
    <div className="Weather">
      <h2>Weather App</h2>
    </div>
  );
}
