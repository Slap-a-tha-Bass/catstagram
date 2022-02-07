import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState<IRegister>({});

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        const token = await res.json();
        localStorage.setItem("token", token.token);
        navigate(`/profile`);
      } else {
        throw new Error("Invalid register");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Register</h1>
      <form>
        <div>
          <label htmlFor="first_name">first name</label>
          <input
            name="first_name"
            value={values.first_name || ""}
            onChange={handleChanges}
          />
        </div>
        <div>
          <label htmlFor="last_name">last name</label>
          <input
            name="last_name"
            value={values.last_name || ""}
            onChange={handleChanges}
          />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input
            name="email"
            value={values.email || ""}
            onChange={handleChanges}
          />
        </div>
        <div>
          <label htmlFor="username">username</label>
          <input
            name="username"
            value={values.username || ""}
            onChange={handleChanges}
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            name="password"
            value={values.password || ""}
            onChange={handleChanges}
          />
        </div>
        <button onClick={handleRegister}>Register</button>
      </form>
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
