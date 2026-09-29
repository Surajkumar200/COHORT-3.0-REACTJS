import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
      <div className='w-full p-2 bg-blue-600 flex justify-between items-center'>
          <div>
              <img src="" alt="logo" />
          </div>
          <div className='flex gap-10'>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/about'>About</NavLink>
              <NavLink to='/contact'>Contact</NavLink>
          
          </div>
          <button>
              login
          </button>
    </div>
  )
}

export default Navbar