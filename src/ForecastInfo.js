import React from "react";
import Icon from "./Icon";

export default function ForecastInfo(props) {
  function day() {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thrusday",
      "Friday",
      "Saturday",
    ];
    let day = days[new Date(props.data.dt * 1000).getDay()];
    return `${day}`;
  }

  function temperature() {
    let celsius = Math.round(props.data.main.temp);
    let fahrenheit = Math.round((celsius * 9) / 5 + 32);
    return `${celsius}ºC | ${fahrenheit}ºF`;
  }

  return (
    <div className="ForecastInfo col">
      {day()}
      <Icon reference={props.data.weather[0].icon} />
      {temperature()}
    </div>
  );
}
