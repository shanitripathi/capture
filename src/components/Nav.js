import React, { useEffect } from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <StyledNav>
      <h1>
        <NavLink id="logo" to="/">
          Capture
        </NavLink>
      </h1>
      <ul>
        <li>
          <NavLink activeClassName="active-link" exact to="/">
            1. About Us
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active-link" to="/work">
            2. Our Work
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active-link" to="/contact">
            3. Contact Us
          </NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  position: sticky;
  top: 0;
  z-index: 4;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-family: "Lobster", cursive;
    font-size: 1.5rem;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
`;

export default Nav;
