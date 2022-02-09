import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaCat, FaUserAlt } from "react-icons/fa";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Logo = styled.div`
  font-size: 1.5rem;
`;
const Span = styled.span`
  color: #9f3bfd;
  text-decoration: wavy underline;
`;
const Span2 = styled.span`
  color: #ffffff;
  text-decoration: wavy underline;
`;
const Align = styled.div`
  display: flex;
  align-items: center;
`
const Navbar = () => {
  return (
    <NavContainer>
      <Logo>
        <div>
          <FaCat />
          <Link to="/">
            <Span>cat</Span>
            <Span2>stagram</Span2>
          </Link>
        </div>
      </Logo>
      <Align>
        <Link to="/profile">
          <div>
            <FaUserAlt />
          </div>
        </Link>
        <Link to="/login">login</Link>
        <Link to="/register">register</Link>
      </Align>
    </NavContainer>
  );
};

export default Navbar;
