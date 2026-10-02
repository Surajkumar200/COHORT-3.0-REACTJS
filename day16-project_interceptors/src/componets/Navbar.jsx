import React, { useContext } from 'react'
import { NavLink,  useNavigate } from 'react-router'
import { AuthStore } from '../context/AuthContext';

const Navbar = () => {
  let navigate = useNavigate()
  const { setLoggedInUsers } = useContext(AuthStore);

  const userLoggedOut = () => {
      setLoggedInUsers(null)
      localStorage.removeItem("loggedInUser");
      navigate("/")
  }
  return (
    <div className="border-r border-gray-500 flex flex-col justify-between ">
      <div className="flex flex-col gap-10">
        <h1 className="text-3xl font-semibold">E-comm</h1>
        <div className="flex flex-col gap-6 font-medium text-xl ml-5">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-2xl text-red-500 border-b border-red-500"
                : "border-b border-gray-500"
            }
            to={"/main"}
            end
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-2xl text-red-500 border-b border-red-500"
                : "border-b border-gray-500"
            }
            to={"/main/users"}
          >
            Users
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-2xl text-red-500 border-b border-red-500"
                : "border-b border-gray-500"
            }
            to={"/main/products"}
          >
            Products
          </NavLink>
        </div>
      </div>
      <div className="bg-red-500 py-3 px-5 rounded-2xl m-2 text-center font-bold text-white">
        <button onClick={userLoggedOut}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar