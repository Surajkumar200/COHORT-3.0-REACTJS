import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { AuthStore } from "../context/AuthContext";

const PublicRoute = () => {
  const { loggedInUsers } = useContext(AuthStore);

  if (loggedInUsers) {
    return <Navigate to={"/main"} />;
  }
  return <Outlet />;
};

export default PublicRoute;
