import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import Deatail from '../pages/Deatail'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Aboutkeandar from '../pages/Aboutkeandar'

const AppRoutes = () => {
  return (
      <div>
          <Routes>
              <Route path='/' element={<Home/>}>
                  <Route path='details' element={<Deatail/>} />
              </Route>
              <Route path='/about' element={<About />}>
                  <Route path='aka' element={<Aboutkeandar/>}/>
              </Route>
              <Route path='/contact' element={<Contact/>}/>
          </Routes>
    </div>
  )
}

export default AppRoutes