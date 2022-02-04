import React, { useState, useEffect } from "react";
import { GlobalStyle, darkTheme, lightTheme } from "./styled";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Posts from "./views/Posts";
import Details from "./views/Details";
import Messages from "./views/Messages";
import Login from "./views/Login";
import Register from "./views/Register";
import NotFound from "./views/NotFound";

const App = () => {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Posts />} />
          <Route>
            <Route path="posts/:postid" element={<Details />} />
            <Route path="messages" element={<Messages />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
