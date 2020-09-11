import React from "react";
import "./projects.scss";
import { Github, WWW } from "../icons/socialIcons";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const projectsContainer = {
  hidden: {
    opacity: 1,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5,
      when: "beforeChildren",
    },
  },
};

const project = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function Projects() {
  return (
    <motion.div
      className="container"
      variants={projectsContainer}
      initial="hidden"
      animate="visible"
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <h1>
        Small selection of a few projects. Feel free to visit the repo or
        website.
      </h1>
      <motion.div
        class="content"
        variants={project}
        transition={{ delay: 0.1 }}
      >
        <div class="content-overlay"></div>
        <img
          class="content-image"
          src={require("../../assets/images.nosync/pflanzy.gif")}
          alt="Pflanzy"
        />
        <div class="content-details fadeIn-bottom">
          <h3 class="content-title">Pflanzy</h3>
          <h5 class="subheaderPflanzy">
            Final Project of DCI WebDev Course - React Native
          </h5>
          <p>
            My role: Expandable container on PlantPage, Explore Section, styling
            and built of multiple other components
          </p>
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
      </motion.div>
      <motion.div
        class="content"
        variants={project}
        transition={{ delay: 0.3 }}
      >
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
              href="https://github.com/patrickthumeyer/product-list-react-hooks"
              target="_blank"
              className="link"
            >
              <Github />
              <p>GitHub</p>
            </a>
            <a
              href="https://product-list-react-hooks.vercel.app/"
              target="_blank"
              className="link"
            >
              <WWW />
              <p>Website</p>
            </a>
          </div>
        </div>
      </motion.div>
      <motion.div
        class="content"
        variants={project}
        transition={{ delay: 0.5 }}
      >
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
      </motion.div>
      <motion.div
        class="content"
        variants={project}
        transition={{ delay: 0.7 }}
      >
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
      </motion.div>
    </motion.div>
  );
}

export default Projects;
