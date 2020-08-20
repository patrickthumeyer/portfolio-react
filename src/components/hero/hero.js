import React from "react";
import { motion } from "framer-motion";
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

const techIconsContainer = {
  hidden: {
    opacity: 1,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 2,
      when: "beforeChildren",
    },
  },
};

const techIcon = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function Hero() {
  return (
    <div className="mainWrapper">
      <div className="hero">
        <div className="blur"></div>
        <div className="heroTopWrapper">
          <motion.div
            className="imageContainer"
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: -10, opacity: 1 }}
            transition={{
              delay: 1.5,
              duration: 0.3,
              mass: 0.4,
              damping: 10,
              type: "spring",
              stiffness: 200,
            }}
          >
            <div className="profileImage"></div>
          </motion.div>
          <div className="descriptionContainer">
            <h1 className="descriptionHeadline">Hey there! I´m Patrick.</h1>
            <div className="description">
              I'm a Frontend Developer based in Berlin. In early 2018 I decided
              it was time for a change. My job as a Business Development Manager
              in Marketing was lacking the potential to inspire me in the long
              run. I decided to jump into Web Development in order to learn a
              new skill which also holds the potential to benefit from my former
              experience and gives me a clearer purpose of what I’m working
              towards in an organization. I am very excited to tackle all the
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

        <motion.div
          className="expertise"
          variants={techIconsContainer}
          initial="hidden"
          animate="visible"
        >
          <h2 className="techStackHeadline">Tech Stack: </h2>
          <div className="tech">
            <motion.div variants={techIcon} className="techIconWrapper">
              <Html fill="#dbdbdb" />
              <p className="techLabel">HTML</p>
            </motion.div>
            <motion.div
              variants={techIcon}
              transition={{ delay: 0.1 }}
              className="techIconWrapper"
            >
              <Css fill="#dbdbdb" />
              <p className="techLabel">CSS</p>
            </motion.div>
            <motion.div
              variants={techIcon}
              transition={{ delay: 0.2 }}
              className="techIconWrapper"
            >
              <Sass fill="#dbdbdb" />
              <p className="techLabel">SASS</p>
            </motion.div>
            <motion.div
              variants={techIcon}
              transition={{ delay: 0.3 }}
              className="techIconWrapper"
            >
              <JavaScript fill="#dbdbdb" />
              <p className="techLabel">JavaScript</p>
            </motion.div>
            <motion.div
              variants={techIcon}
              transition={{ delay: 0.4 }}
              className="techIconWrapper"
            >
              <ReactLogo fill="#dbdbdb" />
              <p className="techLabel">React</p>
            </motion.div>
            <motion.div
              variants={techIcon}
              transition={{ delay: 0.5 }}
              className="techIconWrapper"
            >
              <Bootstrap fill="#dbdbdb" />
              <p className="techLabel">Bootstrap</p>
            </motion.div>
            <motion.div
              variants={techIcon}
              transition={{ delay: 0.6 }}
              className="techIconWrapper"
            >
              <Jquery fill="#dbdbdb" />
              <p className="techLabel">jQuery</p>
            </motion.div>
            <motion.div
              variants={techIcon}
              transition={{ delay: 0.7 }}
              className="techIconWrapper"
            >
              <NodeJs fill="#dbdbdb" />
              <p className="techLabel">Node.js</p>
            </motion.div>
            <motion.div
              variants={techIcon}
              transition={{ delay: 0.8 }}
              className="techIconWrapper"
            >
              <Mongo fill="#dbdbdb" />
              <p className="techLabel">MongoDB</p>
            </motion.div>
            <motion.div
              variants={techIcon}
              transition={{ delay: 0.9 }}
              className="techIconWrapper"
            >
              <Github fill="#dbdbdb" />
              <p className="techLabel">GitHub</p>
            </motion.div>
            <motion.div
              variants={techIcon}
              transition={{ delay: 1 }}
              className="techIconWrapper"
            >
              <Npm fill="#dbdbdb" />
              <p className="techLabel">npm</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
