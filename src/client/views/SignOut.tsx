import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, CenterDiv } from "./Login";
import styled from "styled-components";

const FlexAround = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SignOut = () => {
  const navigate = useNavigate();
  const handleSignOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (confirm(`Are you sure you want to sign out?`)) {
      localStorage.removeItem("token");
      navigate("/login");
    }
  };
  const toProfile = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate("/profile");
  };
  return (
    <>
      <CenterDiv>
        <h4>Are you sure you want to sign out?</h4>
      </CenterDiv>
      <FlexAround>
        <Button onClick={handleSignOut}>Yes</Button>
        <Button onClick={toProfile}>No</Button>
      </FlexAround>
    </>
  );
};

export default SignOut;
