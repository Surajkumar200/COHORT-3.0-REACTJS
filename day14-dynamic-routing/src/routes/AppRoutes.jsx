import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Product from '../pages/Product'
import ProductDetail from '../pages/ProductDetail'
import ProtecteRoute from './ProtecteRoute'

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <ProtecteRoute>
              <About />
            </ProtecteRoute>
          }
        />
        <Route path="/product" element={<Product />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default AppRoutes