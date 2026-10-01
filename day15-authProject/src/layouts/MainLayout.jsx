import React, { useContext } from 'react'
import { Outlet } from 'react-router'
import { AuthStore } from '../context/AuthContext'

const MainLayout = () => {
    const { setLoggedInUsers } = useContext(AuthStore);


    const userLoggedOut = () => {
        setLoggedInUsers(null)
        localStorage.removeItem("loggedInUser");
        
    }
  return (
      <div>
          <button
              onClick={userLoggedOut}
          >
              LogOut
          </button>
          <Outlet/>
    </div>
  )
}

export default MainLayout