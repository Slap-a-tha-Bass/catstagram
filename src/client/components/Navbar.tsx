import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  place-content: space-around;
  align-items: center;
`;
const Logo = styled.div`
  font-size: 2rem;
`;

const Navbar = () => {
  return (
    <NavContainer>
      <Logo>
        <Link to="/">catstagram</Link>
      </Logo>
      <div>
        <Link to="/login">login</Link>
        <Link to="/register">register</Link>
      </div>
    </NavContainer>
  );
};

export default Navbar;
