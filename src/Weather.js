import React from "react";
import Time from "./Time";
import Icon from "./Icon";
import Temperature from "./Temperature";
import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <h1>{props.info.city}</h1>
      <ul>
        <li>
          <Time date={props.info.date} />
        </li>
        <li className="text-capitalize">{props.info.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="icon">
            <Icon reference={props.info.icon} />
          </div>
        </div>

        <div className="col-6">
          <div className="temperature">
            <Temperature celsius={props.info.temperature} />
          </div>
          <ul>
            <li>Humidity: {props.info.humidity} %</li>
            <li>Wind: {Math.round(props.info.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
