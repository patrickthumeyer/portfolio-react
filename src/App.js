import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import "./styles/App.scss";
import ParticlesBackground from "./components/particles/particles";
import Hero from "../src/components/hero/hero";
import Projects from "../src/components/projects/projects";
import "normalize.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <ParticlesBackground className="particles" />
        <div className="transition-top"></div>

        <div className="main-screen">
          <ul className="navContainer">
            <li className="navListItem">
              <NavLink className="navElement" exact to="/">
                HOME
              </NavLink>
            </li>
            <li className="navListItem">
              <NavLink className="navElement" to="/projects">
                PROJECTS
              </NavLink>
            </li>
          </ul>
          <div className="contentWrapper">
            <Switch>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route>
                <Hero className="hero" exact path="/" />
              </Route>
            </Switch>
          </div>
          <div className="footer">
            © Copyright 2020 Website by Patrick Thumeyer
          </div>
        </div>

        <div className="transition-bottom"></div>
      </div>
    </div>
  );
}

export default App;
