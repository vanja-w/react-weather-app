import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      {/*SEARCH FORM STARTS*/}
      <form>
        <div className="row">
          <div className="col-8">
            <input className="w-100" type="search" placeholder="Enter a city" />
          </div>
          <div className="col-4">
            <input
              type="submit"
              value="Search"
              className="btn btn-warning w-100"
            />
          </div>
        </div>
      </form>
      {/*SEARCH FORM ENDS*/}
      <div className="city text-center">BERLIN</div>
      <div className="date text-center">Monday, 18 April</div>
      {/*WEATHER INFO STARTS*/}
      <div className="row ">
        <div className="col-6">Weather icon</div>
        <div className="col-6">
          <div className="col">16°C</div>
          <div className="col">8° / 20°</div>
        </div>
      </div>
      <p>Weather description and tips on what to wear</p>
      <div className="row">
        <div className="col">Wind: 10 km/h</div>
        <div className="col">Humidity: 41%</div>
        <div className="col">Precipitation: 0%</div>
      </div>
      {/*WEATHER INFO ENDS*/}
    </div>
  );
}
