import React from "react";
import { motion, useCycle } from "framer-motion";

const loader = {
  animationOne: {
    x: [-30, 30],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },

  animationTwo: {
    x: 0,
    y: [30, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  },
};



const Loader = () => {
  const [aniamtion, cycleAnimation] = useCycle("animationOne", "animationTwo");

  return (
    <>
      <motion.div
        className="load"
        variants={loader}
        animate="animationOne"
      ></motion.div>
      {/* <button onClick={() => cycleAnimation()}>cyle the loader</button> */}
    </>
  );
};

export default Loader;
