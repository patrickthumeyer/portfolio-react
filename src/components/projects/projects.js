import React from "react";
import "./projects.scss";
import { Github, WWW } from "../icons/socialIcons";

function Projects() {
  return (
    <div className="container">
      <div class="content">
        <div class="content-overlay"></div>
        <img
          class="content-image"
          src={require("../../assets/images.nosync/pflanzy.gif")}
          alt="Pflanzy"
        />
        <div class="content-details fadeIn-bottom">
          <h3 class="content-title">Pflanzy</h3>
          <div className="linkContainer">
            <a
              href="https://github.com/Pflanzy/Pflanzy-mobile-app"
              target="_blank"
              className="link"
            >
              <Github />
              <p>GitHub</p>
            </a>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="content-overlay"></div>
        <img
          class="content-image"
          src={require("../../assets/images.nosync/React-Params-List.png")}
          alt="react-params-list"
        />
        <div class="content-details fadeIn-bottom">
          <h3 class="content-title">React Params List</h3>
          <div className="linkContainer">
            <a
              href="https://github.com/patrickthumeyer/react-params-product-list"
              target="_blank"
              className="link"
            >
              <Github />
              <p>GitHub</p>
            </a>
            <a
              href="https://patrickthumeyer.github.io/react-params-product-list/"
              target="_blank"
              className="link"
            >
              <WWW />
              <p>Website</p>
            </a>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="content-overlay"></div>
        <img
          class="content-image"
          src={require("../../assets/images.nosync/CSS-Portfolio.png")}
          alt="css-portfolio"
        />
        <div class="content-details fadeIn-bottom">
          <h3 class="content-title">CSS-Portfolio</h3>
          <div className="linkContainer">
            <a
              href="https://github.com/patrickthumeyer/portfolio-css-html"
              target="_blank"
              className="link"
            >
              <Github />
              <p>GitHub</p>
            </a>
            <a
              href="https://patrickthumeyer.github.io/portfolio-css-html/"
              target="_blank"
              className="link"
            >
              <WWW />
              <p>Website</p>
            </a>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="content-overlay"></div>
        <img
          class="content-image"
          src={require("../../assets/images.nosync/Converter.png")}
          alt="converter"
        />
        <div class="content-details fadeIn-bottom">
          <h3 class="content-title">Fetch Converter</h3>
          <div className="linkContainer">
            <a
              href="https://github.com/patrickthumeyer/Fetch-crypto-currency-converter"
              target="_blank"
              className="link"
            >
              <Github />
              <p>GitHub</p>
            </a>
            <a
              href="https://patrickthumeyer.github.io/Fetch-crypto-currency-converter/"
              target="_blank"
              className="link"
            >
              <WWW />
              <p>Website</p>
            </a>
          </div>
        </div>
      </div>
    </div>
    // <ul className="projectsContainer">
    //   <li className="container">
    //     <img
    //       src={require("../../assets/images.nosync/pflanzy.gif")}
    //       alt="react-params-list"
    //       className="project-gif"
    //     />
    //     <div className="middle-gif">
    //       <button>Test</button>
    //     </div>
    //   </li>
    //   <li className="container">
    //     <img
    //       src={require("../../assets/images.nosync/React-Params-List.png")}
    //       alt="react-params-list"
    //       className="project"
    //     />
    //   </li>
    //   <li className="container">
    //     <img
    //       src={require("../../assets/images.nosync/CSS-Portfolio.png")}
    //       alt="react-params-list"
    //       className="project"
    //     />
    //   </li>
    //   <li className="container">
    //     <img
    //       src={require("../../assets/images.nosync/Converter.png")}
    //       alt="react-params-list"
    //       className="project"
    //     />
    //   </li>
    // </ul>
  );
}

export default Projects;
