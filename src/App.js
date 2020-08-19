import React from "react";
import "./styles/App.scss";
import ParticlesBackground from "./components/particles/particles";
import Hero from "../src/components/hero/hero";
import "normalize.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <ParticlesBackground className="particles" />
        <div className="transition-top"></div>
        <div className="main-screen">
          <Hero className="hero" />
        </div>
        <div className="transition-bottom"></div>
      </div>
    </div>
  );
}

export default App;
