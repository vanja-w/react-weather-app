import Weather from "../Weather/Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather app</h1>
        <Weather />
        <footer>
          <a href="/">Open-source code</a> by Vanja Wallace
        </footer>
      </div>
    </div>
  );
}
