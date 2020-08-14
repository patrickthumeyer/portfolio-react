import React from "react";
import "./styles/App.scss";
import ParticlesBackground from "./components/particles/particles";
// import Hero from "../src/components/hero/hero";
import "normalize.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="main-screen">
          <h1 className="headline">Hi there! I´m Patrick.</h1>
          {/* <Hero /> */}
          <ParticlesBackground className="particles" />
        </div>
        <div className="transition"></div>
      </div>
    </div>
  );
}

export default App;
