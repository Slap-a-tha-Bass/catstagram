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
import Profile from "./views/Profile";
import Private from "./components/Private";
import Compose from "./views/Compose";
import Edit from "./views/Edit";
import SignOut from "./views/SignOut";
import Search from "./views/Search";
import Delete from "./views/Delete";

const App = () => {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route>
            <Route path="messages" element={<Messages />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="/" element={<Private />}>
            <Route index element={<Posts />} />
            <Route path="posts/:postid" element={<Details />} />
            <Route path="posts/search" element={<Search />} />
            <Route path="profile" element={<Profile />} />
            <Route path="compose" element={<Compose />} />
            <Route path="signout" element={<SignOut />} />
            <Route path="edit/:postid" element={<Edit />} />
            <Route path="delete/:postid" element={<Delete />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
