import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
      <div className='w-full bg-blue-500 p-2 flex  justify-between items-center'>
          <div><img src="" alt="logo" /></div>
          <div className='flex gap-10'>
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/about"}>About</NavLink>
              <NavLink to={"/product"}>Product</NavLink>
          </div>
          <button className='bg-yellow-500 py-2 px-5 rounded-2xl'>login</button>
    </div>
  )
}

export default Navbar