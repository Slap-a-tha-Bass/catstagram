import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaCat } from "react-icons/fa";

const NavContainer = styled.div`
  display: flex;
  place-content: space-around;
  align-items: center;
`;
const Logo = styled.div`
  font-size: 2rem;
`;
const Span = styled.span`
  color: #9f3bfd;
  text-decoration: wavy underline;
`
const Span2 = styled.span`
  color: #ffffff;
  text-decoration: wavy underline;

`
const Navbar = () => {
  return (
    <NavContainer>
      <Logo>
        <div>
          <FaCat />
          <Link to="/"><Span>cat</Span><Span2>stagram</Span2></Link>
        </div>
      </Logo>
      <div>
        <Link to="/login">login</Link>
        <Link to="/register">register</Link>
      </div>
    </NavContainer>
  );
};

export default Navbar;
