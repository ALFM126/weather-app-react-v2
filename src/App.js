import React from "react";
import Search from "./Search";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="app-title">Weather Search Engine</h1>
        <Search city="Braga" />
        <footer>
          <small>
            Weather app coded by ALFM126 and{" "}
            <a
              href="https://github.com/ALFM126/weather-app-react-v2"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on Github
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
