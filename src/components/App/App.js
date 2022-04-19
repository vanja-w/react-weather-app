import React from "react";
import Weather from "../Weather/Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center">Weather app</h1>
        <Weather defaultCity="Berlin" />
        <footer>
          <a href="/">Open-source code</a> by Vanja Wallace
        </footer>
      </div>
    </div>
  );
}
