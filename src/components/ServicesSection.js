import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import { About, Image, Description, Hide } from "../styles";
import styled from "styled-components";
import { useScroll } from "../animation";
import { fade } from "../animation";

// test
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const ServicesSection = () => {
  const [element, controls] = useScroll();

  return (
    <Services ref={element} variants={fade} animate={controls} initial="hidden">
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <div className="card">
            <div className="icon">
              <img src={clock} alt="" />
              <h3>Efficient</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="" />
              <h3>Diaphragm</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} alt="" />
              <h3>Affordable</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="" />
              <h3>Teamwork</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: transparent;
  p {
    font-size: medium;
  }
`;

export default ServicesSection;
