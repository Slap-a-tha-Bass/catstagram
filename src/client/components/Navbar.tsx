import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaCat, FaUserAlt } from "react-icons/fa";
import { Button } from "../views/Login";
import apiService from "../utils/api-service";

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
`;
const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthed(true);
    }
  }, [location.pathname]);

  const handleSignOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (confirm(`Are you sure you want to sign out?`)) {
      localStorage.removeItem("token");
      navigate("/login");
    }
  };

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
        {isAuthed ? (
          <Button
            onClick={handleSignOut}
            bgColor={`rgba(117, 31, 255, 0.1)`}
            color={"whitesmoke"}
            padding={0.25}
            fontSize={1}
            marginTop={0.01}
          >
            sign out
          </Button>
        ) : (
          <Link to="/login">login</Link>
        )}

        <Link to="/register">register</Link>
      </Align>
    </NavContainer>
  );
};

export default Navbar;
