import React from 'react'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import MainLayout from '../layout/MainLayout'
import Home from "../pages/Home"
import About from '../pages/About'
import Sarvice from '../pages/Sarvice'

const AppRoutes = () => {
    let route = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    path: "",
                    element:<Home/>
                },
                {
                    path: "about",
                    element:<About/>
                },
                {
                    path: "sarvice",
                    element:<Sarvice/>
                }
            ]
        }
    ])
 
 return <RouterProvider router={route} />
}

export default AppRoutes