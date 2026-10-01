import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { AuthStore } from '../context/AuthContext';

const ProtectedRoute = () => {
    const { loggedInUsers } = useContext(AuthStore);

    if (!loggedInUsers) {
        return <Navigate to={"/"} />
    }
  return <Outlet/>
}

export default ProtectedRoute