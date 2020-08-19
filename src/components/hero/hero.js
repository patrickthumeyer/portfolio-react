import React from "react";
import "./hero.scss";
import {
  Html,
  Css,
  Sass,
  Bootstrap,
  JavaScript,
  Jquery,
  ReactLogo,
  Mongo,
  NodeJs,
  Npm,
} from "../icons/techIcons";
import { Linkedin, Github, Mail } from "../icons/socialIcons";

function Hero() {
  return (
    <div className="mainWrapper">
      <div className="hero">
        <div className="blur"></div>
        <div className="heroTopWrapper">
          <div className="imageContainer">
            <div className="profileImage"></div>
          </div>
          <div className="descriptionContainer">
            <h1>Hey there! I´m Patrick.</h1>
            <div className="description">
              I'm a Frontend Developer based in Berlin. In early 2018 I decided
              it was time for a change. My job as a Business Development Manager
              in Marketing was lacking the potential to inspire me in the long
              run. I decided to jump into Web Development in order to learn a
              new skill which also holds the potential to benefit from my former
              experience and gives me a clearer purpose of what I’m working
              towards in an organisation. I am very excited to tackle all the
              new problems being thrown my way and to dive deeper into the world
              of Web Development.
            </div>
            <div className="socialIconsWrapper">
              <a
                className="socialIcon"
                target="_blank"
                href="//github.com/patrickthumeyer"
              >
                <Github />
              </a>
              <a
                className="socialIcon"
                target="_blank"
                href="//www.linkedin.com/in/patrickthumeyer/"
              >
                <Linkedin />
              </a>
              <a
                className="socialIcon"
                href="mailto:p.thumeyer@gmail.com?Subject=Please enter subject"
              >
                <Mail />
              </a>
            </div>
          </div>
        </div>

        <div className="expertise">
          <h2 className="techStackHeadline">Tech Stack: </h2>
          <div className="tech">
            <div className="techIconWrapper">
              <Html fill="#dbdbdb" />
              <p className="techLabel">HTML</p>
            </div>
            <div className="techIconWrapper">
              <Css fill="#dbdbdb" />
              <p className="techLabel">CSS</p>
            </div>
            <div className="techIconWrapper">
              <Sass fill="#dbdbdb" />
              <p className="techLabel">SASS</p>
            </div>
            <div className="techIconWrapper">
              <JavaScript fill="#dbdbdb" />
              <p className="techLabel">JavaScript</p>
            </div>
            <div className="techIconWrapper">
              <ReactLogo fill="#dbdbdb" />
              <p className="techLabel">React</p>
            </div>
            <div className="techIconWrapper">
              <Bootstrap fill="#dbdbdb" />
              <p className="techLabel">Bootstrap</p>
            </div>
            <div className="techIconWrapper">
              <Jquery fill="#dbdbdb" />
              <p className="techLabel">jQuery</p>
            </div>
            <div className="techIconWrapper">
              <NodeJs fill="#dbdbdb" />
              <p className="techLabel">Node.js</p>
            </div>
            <div className="techIconWrapper">
              <Mongo fill="#dbdbdb" />
              <p className="techLabel">MongoDB</p>
            </div>
            <div className="techIconWrapper">
              <Github fill="#dbdbdb" />
              <p className="techLabel">GitHub</p>
            </div>
            <div className="techIconWrapper">
              <Npm fill="#dbdbdb" />
              <p className="techLabel">npm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
