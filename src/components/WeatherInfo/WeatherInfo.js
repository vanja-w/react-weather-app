import React from "react";
import CurrentDate from "../CurrentDate/CurrentDate";
import "./WeatherInfo.css";
import WeatherIcon from "../WeatherIcon/WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo mt-5">
      <h2 className="city text-center text-uppercase mb-2">
        {props.data.location}
      </h2>
      {/*CURRENT DATE STARTS*/}
      <CurrentDate date={props.data.date} />
      {/*CURRENT DATE ENDS*/}

      <div className="row d-flex flex-column mb-4">
        <div className="col d-flex flex-column">
          <div
            className="col d-flex mb-3 justify-content-center"
            id="current-temp-celsius"
          >
            {Math.round(props.data.temperature)}°C
          </div>

          <div className="col d-flex mb-2 justify-content-center">
            <WeatherIcon id={props.data.iconId} size={120} />
          </div>
        </div>

        <div
          className="col d-flex mt-4 justify-content-center"
          id="weather-description"
        >
          {props.data.description}
        </div>
      </div>

      <div className="row d-flex m-0 weather-data-details">
        <div className="col d-flex align-items-center flex-column p-2">
          <div className="weather-data-prop">wind</div>
          <div className="weather-data-value">
            {Math.round(props.data.wind)} km/h
          </div>
        </div>
        <div className="col d-flex mx-4 align-items-center flex-column p-2">
          <div className="weather-data-prop">humidity</div>
          <div className="weather-data-value">{props.data.humidity}%</div>
        </div>
        <div className="col d-flex p-2">
          <div className="min-temp col d-flex align-items-center flex-column">
            <div className="weather-data-prop">min</div>
            <div className="weather-data-value">
              {Math.round(props.data.tempMin)}°
            </div>
          </div>
          <div className="max-temp col d-flex align-items-center flex-column">
            <div className="weather-data-prop">max</div>
            <div className="weather-data-value">
              {" "}
              {Math.round(props.data.tempMax)}°
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
