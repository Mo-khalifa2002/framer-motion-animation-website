import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const svgAnimate = {
  hidden: {
    rotate: "-180deg",
  },
  visible: {
    rotate: 0,
    transition: {
      duration: 0.7,
    },
  },
};
const pathVariant = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const pathVariant2 = {
  hidden: {
    opacity: 0,
    pathLength: 0.2,
    rotate: "-180deg",
  },
  visible: {
    rotate: 0,
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <header>
      <Link to="/">
        <motion.div
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          className="logo"
        >
          <motion.svg
            variants={svgAnimate}
            initial="hidden"
            animate="visible"
            className="pizza-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <motion.path
              variants={pathVariant}
              initial="hidden"
              animate="visible"
              fill="none"
              d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            />
            <motion.path
              variants={pathVariant2}
              initial="hidden"
              animate="visible"
              fill="none"
              d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
            />
          </motion.svg>
        </motion.div>
      </Link>
      <motion.div
        className="title"
        transition={{
          delay: 0.3,
          duration: 0.5,
          type: "spring",
          stiffness: 120,
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  );
};

export default Header;
