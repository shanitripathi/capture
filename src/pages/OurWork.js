import React from "react";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  imageAnim,
  lineAnim,
  slider,
  useScroll,
} from "../animation";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <Frame1 variants={slider}></Frame1>
      <Frame2 variants={slider}></Frame2>
      <Frame3 variants={slider}></Frame3>
      <Frame4 variants={slider}></Frame4>
      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img variants={imageAnim} src={athlete} alt="athlete" />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <motion.div className="line"></motion.div>
        <Link to="/work/the-racer">
          <motion.img src={theracer} alt="the racer" />
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="good times" />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background-color: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background-color: #ff8efb;
`;
const Frame3 = styled(Frame2)`
  background-color: #8ed2ff;
`;
const Frame4 = styled(Frame3)`
  background-color: #8effa0;
`;
export default OurWork;
