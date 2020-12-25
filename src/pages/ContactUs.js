import React from "react";
import { pageAnimation } from "../animation";
import { motion } from "framer-motion";
import { titleAnim } from "../animation";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send us a Message</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send an Email</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Follow us!</h2>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: white;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background-color: white;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
    color: white;
  }
`;

export default ContactUs;
