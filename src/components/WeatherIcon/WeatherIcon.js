import React from "react";
import "./WeatherIcon.css";
import "../../weather-icons/css/weather-icons.css";

export default function WeatherIcon(props) {
  //   const dataMapping = {};

  return (
    <div className="WeatherIcon">
      Hello weather icon {props.id}
      <i className="wi wi-night-sleet"></i>
    </div>
  );
}
