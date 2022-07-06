import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

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

  const contentVarients = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.5,
        delay: -0.2,
        type: "spring",
        stiffness: 120,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={contentVarients}
      className="base container"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              transition={{ type: "spring", stiffness: "300" }}
              whileHover={{
                originX: 0,
                scale: 1.3,
                color: "yellow",
                textShadow: "0px 0px 2px white",
              }}
              key={base}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          className="next"
          transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
        >
          <Link to="/toppings">
            <motion.button whileHover="hover" variants={buttonVariant}>
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
