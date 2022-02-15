import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { FaCat } from "react-icons/fa";
import { Button } from "../views/Login";
import { CgMenuRightAlt } from "react-icons/cg";

const Navbar = () => {
  const location = useLocation();

  const [isAuthed, setIsAuthed] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthed(true);
    }
    if (location.pathname === "/login") {
      setIsAuthed(false);
    }
  }, [location.pathname]);

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
      <Button
        onClick={() => setMenuOpen(!isMenuOpen)}
        bgColor="rgba(117, 31, 255, 0.01)"
        color="whitesmoke"
        fontSize={2}
        padding={0.5}
        marginTop={0}
      >
        {isMenuOpen && (
          <UL>
            {isAuthed ? (
              <div>
                <LI>
                  <Link to="/">home</Link>
                </LI>
                <LI>
                  <Link to="/posts/search">search</Link>
                </LI>
                <LI>
                  <Link to="/profile">profile</Link>
                </LI>
                <LI>
                  <Link to="/signout">sign out</Link>
                </LI>
              </div>
            ) : (
              <div>
                <LI>
                  <Link to="/login">login</Link>
                </LI>
                <LI>
                  <Link to="/register">register</Link>
                </LI>
              </div>
            )}
          </UL>
        )}
        {!isMenuOpen && <CgMenuRightAlt />}
      </Button>
    </NavContainer>
  );
};

export default Navbar;

interface ULProps {
  display?: string;
}
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
const Logo = styled.div`
  font-size: 1.5rem;
  margin-top: 1.5rem;
`;
const Span = styled.span`
  color: #9f3bfd;
  text-decoration: wavy underline;
`;
const Span2 = styled.span`
  color: #ffffff;
  text-decoration: wavy underline;
`;
const moveInRight = keyframes`
    0% {
      opacity: 0;
      transform: translateX(3rem);
    }
    
    100% {
      opacity: 1;
      transform: translate(0);
    }
    `;
export const UL = styled.ul<ULProps>`
  display: ${(props) => props.display || "block"};
  list-style-type: none;
  padding: 0;
  margin: 0;
  animation: ${moveInRight} 0.5s ease-in-out 0.3s both;
`;
export const LI = styled.li`
  font-size: 1.5rem;
  margin: 0.5rem 0.5rem;
  text-align: right;
`;
