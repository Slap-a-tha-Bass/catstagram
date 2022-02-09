import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const Private = ({ children }: IPrivate) => {
  const token = localStorage.getItem("token");
  if (token) {
    return (
      <>
        {children}
        <Outlet />
      </>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default Private;

interface IPrivate {
  children?: React.ReactNode;
}
