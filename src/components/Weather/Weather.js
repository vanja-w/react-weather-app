import React, { useState } from "react";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      location: response.data.name,
      temperature: response.data.main.temp,
      tempMax: response.data.main.temp_max,
      tempMin: response.data.main.temp_min,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      ready: true,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather p-4">
        {/*SEARCH FORM STARTS*/}
        <form>
          <div className="row">
            <div className="col-8">
              <input
                className="w-100"
                type="search"
                placeholder="Enter a city"
              />
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

        {/*WEATHER INFO STARTS*/}
        <WeatherInfo data={weatherData} />
        {/*WEATHER INFO ENDS*/}
      </div>
    );
  } else {
    //API CALL
    const apiKey = "84617a2d9f6cdc8070faab840a39470e";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);

    return "Loading...";
  }
}
