import React from "react";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
// import framer motion
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutUS = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUS;
