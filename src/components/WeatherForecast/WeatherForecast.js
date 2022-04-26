import axios from "axios";
import React, { useState } from "react";
import WeatherForecastDay from "../WeatherForecastDay/WeatherForecastDay";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  function searchLocation() {
    const apiKey = "84617a2d9f6cdc8070faab840a39470e";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row d-flex mt-4">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col d-flex justify-content-center" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  } else {
    searchLocation();
  }
}
