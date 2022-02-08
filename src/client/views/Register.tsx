import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiService from "../utils/api-service";
import { Form, CenterDiv, Label, Input, Button, H1 } from "./Login";

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState<IRegister>({});

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const token = await apiService("/auth/register", "POST", values);
    localStorage.setItem("token", token.token);
    navigate("/profile");
  };
  return (
    <div>
      <CenterDiv>
        <H1>Register</H1>
      </CenterDiv>
      <Form>
        <CenterDiv>
          <Label htmlFor="first_name">first name</Label>
        </CenterDiv>
        <CenterDiv>
          <Input
            name="first_name"
            type="text"
            value={values.first_name || ""}
            onChange={handleChanges}
          />
        </CenterDiv>
        <CenterDiv>
          <Label htmlFor="last_name">last name</Label>
        </CenterDiv>
        <CenterDiv>
          <Input
            name="last_name"
            type="text"
            value={values.last_name || ""}
            onChange={handleChanges}
          />
        </CenterDiv>
        <CenterDiv>
          <Label htmlFor="email">email</Label>
        </CenterDiv>
        <CenterDiv>
          <Input
            name="email"
            type="text"
            value={values.email || ""}
            onChange={handleChanges}
          />
        </CenterDiv>
        <CenterDiv>
          <Label htmlFor="username">username</Label>
        </CenterDiv>
        <CenterDiv>
          <Input
            name="username"
            type="text"
            value={values.username || ""}
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
          <Button onClick={handleRegister}>Register</Button>
        </CenterDiv>
      </Form>
    </div>
  );
};

export default Register;

interface IRegister {
  first_name?: string;
  last_name?: string;
  email?: string;
  username?: string;
  password?: string;
}
