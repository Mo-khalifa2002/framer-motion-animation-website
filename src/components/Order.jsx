import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const contentVarients = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: -0.2,
      type: "spring",
      stiffness: 120,
      when: "beforeChildren",
      staggerChildren: 0.4,
      damping: 8,
      mass: 0.4,
    },
  },
};

const Order = ({ pizza, showModal, setShowModal }) => {
  
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 2000);
  }, [setShowModal]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={contentVarients}
      className="container order"
    >
      <motion.h2 transition={{ duration: 0.5 }}>
        Thank you for your order :)
      </motion.h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map((topping) => (
        <div key={topping}>{topping}</div>
      ))}
    </motion.div>
  );
};

export default Order;
