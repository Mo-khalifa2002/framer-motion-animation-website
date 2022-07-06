import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "./Loader";

const buttonVariant = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px white",
    boxShadow: "0px 0px 8px 3px white",
    transition: {
      duration: 0.4,
      yoyo: Infinity,
    },
  },
};

const sec2 = {
  animationPizza: {
    x: [0, 30, 60, 90, 120, 0],
    y: [0, 30, 0, -30, 0],
    transition: {
      yoyo: Infinity,
      duration: 2,
      delay: 0.5,
    },
  },
};

const Home = () => {
  return (
    <AnimatePresence>
      <motion.div
        exit={{ x: -1000 }}
        transition={{ ease: "easeInOut" }}
        className="home container"
      >
        <motion.h2
          transition={{
            delay: 0.3,
            duration: 0.5,
            type: "spring",
            stiffness: 120,
          }}
          initial={{
            rotateZ: 10,
            color: "indianred",
            scale: 1,
            backgroundColor: "yellow",
            border: "1px solid blue",
            opacity: 0,
          }}
          animate={{
            fontSize: "60px",
            color: "white",
            rotateZ: 0,
            opacity: 0.7,
            backgroundColor: "green",
            scale: 1.5,
            border: "3px solid yellow",
          }}
          className="welcome-to"
        >
          Welcome to Pizza Joint
        </motion.h2>
        <Link to="/base">
          <motion.button whileHover="hover" variants={buttonVariant}>
            Create Your Pizza
          </motion.button>
        </Link>
        <Loader />
      </motion.div>

      {/* another animation */}
      <motion.div className="sec2">
        {/* <motion.button className="animate">animate</motion.button> */}

        {/* <img
          variants={sec2}
          animate="animationPizza"
          className="pizza-svg-img"
          src="https://www.svgrepo.com/show/295489/pizza.svg"
          alt=""
        /> */}
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;
