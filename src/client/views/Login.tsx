import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    try {
      const res = await fetch("/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        const token = await res.json();
        localStorage.setItem("token", token);
        navigate(`/profile`);
      } else {
        throw new Error("Invalid Login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="email">email</label>
          <input
            name="email"
            value={values.email || ""}
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
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;
