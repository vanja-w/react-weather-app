import React from "react";
import CurrentDate from "../CurrentDate/CurrentDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="city text-center text-uppercase">
        {props.data.location}
      </div>
      <CurrentDate date={props.data.date} />
      <div className="row ">
        <div className="col-6">
          <div className="col">Weather icon</div>
          <div className="col">
            <p>{props.data.description}</p>
          </div>
        </div>
        <div className="col-6">
          <div className="col">{Math.round(props.data.temperature)}°C</div>
          <div className="col">
            {Math.round(props.data.tempMin)}° | {Math.round(props.data.tempMax)}
            °
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          Wind <br />
          {Math.round(props.data.wind)} km/h
        </div>
        <div className="col">
          Humidity
          <br /> {props.data.humidity}%
        </div>
        <div className="col">Precipitation: 0%</div>
      </div>
    </div>
  );
}
