import React, { useState } from "react";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import WeatherForecast from "../WeatherForecast/WeatherForecast";
import "./Weather.css";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [location, setLocation] = useState(props.defaultLocation);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      location: response.data.name,
      temperature: response.data.main.temp,
      tempMax: response.data.main.temp_max,
      tempMin: response.data.main.temp_min,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      iconId: response.data.weather[0].id,
      coordinates: response.data.coord,
    });
  }

  function searchLocation() {
    const apiKey = "84617a2d9f6cdc8070faab840a39470e";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchLocation();
  }

  function updateLocation(event) {
    setLocation(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather p-5 mt-5">
        {/*SEARCH FORM STARTS*/}
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8 d-flex">
              {/*INPUT FIELD*/}
              <input
                onChange={updateLocation}
                className="w-100 input-field"
                type="search"
                placeholder="Enter a city"
              />
            </div>
            <div className="col-4">
              {/*SEARCH BUTTON*/}
              <input
                type="submit"
                value="Search"
                className="search-button btn w-100"
              />
            </div>
          </div>
        </form>
        {/*SEARCH FORM ENDS*/}
        {/*WEATHER INFO STARTS*/}
        <WeatherInfo data={weatherData} />
        {/*WEATHER INFO ENDS*/}
        {/*WEATHER FORECAST BEGINS*/}
        <WeatherForecast coordinates={weatherData.coordinates} />
        {/*WEATHER FORECAST ENDS*/}
      </div>
    );
  } else {
    //API CALL
    searchLocation();
    return <TailSpin color="lightblue" height={80} width={80} />;
  }
}
