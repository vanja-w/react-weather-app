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
      <div className="row ">
        <div className="col-6">
          <div className="col">
            <WeatherIcon id={props.data.iconId} />
          </div>
          <div className="col">{props.data.description}</div>
        </div>
        <div className="col-6">{Math.round(props.data.temperature)}°C</div>
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
        <div className="col">
          <div className="col">
            Min
            <br />
            {Math.round(props.data.tempMin)}°
          </div>
          <div className="col">
            Max
            <br />
            {Math.round(props.data.tempMax)}°
          </div>
        </div>
      </div>
    </div>
  );
}
