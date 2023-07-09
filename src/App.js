import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        Developed with 	&#9825; by{" "}
        <a target="_blank" href="https://www.linkedin.com/in/arnav-jha">
          Arnav Jha
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
