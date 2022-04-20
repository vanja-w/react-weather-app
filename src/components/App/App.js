import React from "react";
import Weather from "../Weather/Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center">Weather app</h1>
        <Weather defaultLocation="Berlin" />
        <footer className="text-center mt-5">
          <a
            href="https://github.com/vanja-w/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>{" "}
          by Vanja Wallace
        </footer>
      </div>
    </div>
  );
}
