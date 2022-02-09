import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import apiService from "../utils/api-service";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState<{ email?: string; password?: string }>(
    {}
  );

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const token = await apiService("/auth/login", "POST", values);
    localStorage.setItem("token", token);
    navigate("/profile");
  };
  return (
    <div>
      <CenterDiv>
        <H1>Login</H1>
      </CenterDiv>
      <Form>
        <CenterDiv>
          <Label htmlFor="email">email</Label>
        </CenterDiv>
        <CenterDiv>
          <Input
            name="email"
            type="email"
            value={values.email || ""}
            onChange={handleChanges}
          />
        </CenterDiv>
        <CenterDiv>
          <Label htmlFor="password">password</Label>
        </CenterDiv>
        <CenterDiv>
          <Input
            name="password"
            type="password"
            value={values.password || ""}
            onChange={handleChanges}
          />
        </CenterDiv>
        <CenterDiv>
          <Button onClick={handleLogin}>login</Button>
        </CenterDiv>
      </Form>
    </div>
  );
};

export default Login;

export const CenterDiv = styled.div`
  display: flex;
  place-content: center;
`;
export const Label = styled.label`
  font-size: 1.5rem;
`;
export const Input = styled.input`
  padding: 0.5rem;
  margin: 0.5rem;
  width: 350px;
`;
export const Button = styled.button<ButtonProps>`
  padding: ${(props) => props.padding || 1}rem;
  margin-top: 1rem;
  font-family: monospace;
  background-color: white;
  font-size: ${props => props.fontSize || 1.5}rem;
  color: rgb(117, 31, 255);
  border: none;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
`;
export const Form = styled.form`
  padding: 1rem;
  margin-top: 1rem;
`;
export const H1 = styled.h1`
  margin-top: 2rem;
`;
export const TextArea = styled.textarea`
  padding: 0.5rem;
  margin: 0.5rem;
  width: 350px;
`;

interface ButtonProps {
  padding?: number;
  fontSize?: number;
}
