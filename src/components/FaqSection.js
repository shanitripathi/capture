import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll, fade } from "../animation";

const FaqSection = (props) => {
  const [show, setShow] = useState(false);
  const [element, controls] = useScroll();
  return (
    <Faq variants={fade} animate={controls} initial="hidden" ref={element}>
      <h2>
        Any questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How are you">
          <div className="answer">
            <p>Lorem ipsum dolor sit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              vero.
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              vero.
            </p>
          </div>
        </Toggle>
        <Toggle title="Payment Methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              vero.
            </p>
          </div>
        </Toggle>
        <Toggle title="What Products do you offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              vero.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background-color: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
  h4 {
    font-size: 2rem;
  }
`;

export default FaqSection;
