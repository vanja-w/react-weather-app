import React from "react";
import "./WeatherForecastDay.css";
import WeatherIcon from "../WeatherIcon/WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="WeatherForecastDay d-flex flex-column">
      <div className="day d-flex justify-content-center mb-2">{day()}</div>
      <WeatherIcon id={props.data.weather[0].id} size={50} />
      <div className="col d-flex temp mt-2">
        <div className="min-temp col d-flex align-items-center flex-column">
          {Math.round(props.data.temp.min)}°
        </div>
        <div className="max-temp col d-flex align-items-center flex-column">
          {Math.round(props.data.temp.max)}°
        </div>
      </div>
    </div>
  );
}
