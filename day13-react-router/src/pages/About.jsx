import React from 'react'
import { Outlet, useNavigate } from 'react-router'

const About = () => {
    let navigate = useNavigate()
  return (
      <div>
          <h1>About</h1>
          <button onClick={() =>navigate("/about/aka") }>aka</button>
          <Outlet/>
    </div>
  )
}

export default About