import React from "react";
import CurrentDate from "../CurrentDate/CurrentDate";
import "./WeatherInfo.css";
import WeatherIcon from "../WeatherIcon/WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo mt-5">
      <h2 className="city text-center text-uppercase">{props.data.location}</h2>
      {/*CURRENT DATE STARTS*/}
      <CurrentDate date={props.data.date} />
      {/*CURRENT DATE ENDS*/}
      <div className="row d-flex flex-column mb-3">
        <div className="col d-flex justify-content-center">
          <WeatherIcon id={props.data.iconId} />
        </div>
        <div
          className="col d-flex justify-content-center"
          id="weather-description"
        >
          {props.data.description}
        </div>
        <div
          className="col d-flex justify-content-center"
          id="current-temp-celsius"
        >
          {Math.round(props.data.temperature)}°C
        </div>
      </div>
      <div className="row d-flex">
        <div className="col d-flex justify-content-center text-center">
          Wind <br />
          {Math.round(props.data.wind)} km/h
        </div>
        <div className="col d-flex justify-content-center text-center">
          Humidity
          <br /> {props.data.humidity}%
        </div>
        <div className="col d-flex">
          <div className="col d-flex justify-content-center text-center">
            Min
            <br />
            {Math.round(props.data.tempMin)}°
          </div>
          <div className="col d-flex justify-content-center text-center">
            Max
            <br />
            {Math.round(props.data.tempMax)}°
          </div>
        </div>
      </div>
    </div>
  );
}
