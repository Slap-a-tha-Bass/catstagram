import React, { useState, useEffect } from "react";
import { GlobalStyle, darkTheme, lightTheme } from "./styled";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./views/Home";
import Messages from "./views/Messages";
import Login from "./views/Login";
import Register from "./views/Register";

const App = ({ children }: any) => {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

interface AppProps {}

export default App;
