import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";
import { About, Image, Description, Hide } from "../styles";
// framer motion
import { motion } from "framer-motion";
import { titleAnim, fade, ImageAnim, imageAnim } from "../animation";
import Wave from "./Wave";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have.
        </motion.p>
        <motion.button variants={fade}>Contact us</motion.button>
      </Description>

      <Image>
        <motion.img variants={imageAnim} src={home1} alt="Camera guy!" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
