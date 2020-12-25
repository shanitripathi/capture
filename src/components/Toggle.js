import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div
      className="question"
      Layout
      onClick={() => {
        setToggle(!toggle);
      }}
    >
      <motion.h4>{title}</motion.h4>
      {toggle ? children : ""} <motion.div className="faq-line"></motion.div>
    </motion.div>
  );
};

export default Toggle;
