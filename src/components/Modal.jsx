import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const backdropp = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const moveToCenter = {
  init: {
    y: "-100vh",
  },
  anime: {
    y: "30vh",
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: "120",
    },
  },
  
};

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence exsitBeforeEnter>
      {showModal && (
        <>
          <motion.div
            variants={backdropp}
            initial="hidden"
            animate="visible"
            className="backdrop"
          >
            <AnimatePresence
              onExitComplete={() => null}
              exitBeforeEnter
              // initial={false}
            >
              <motion.div
                variants={moveToCenter}
                initial="init"
                animate="anime"
                className="modal"
              >
                Wanna order another pizza...
                <Link to="/">
                  <button>Order another one!</button>
                </Link>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
