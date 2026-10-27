//import { useState } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import Login from './features/auth/Login'
import Register from './features/auth/Register'
import DashboardLayout from './features/dashboards/DashboardLayout'
import PublicRoute from './features/auth/components/PublicRoute'
import ProtectedRouter from './features/auth/components/ProtectedRouter'
import ProductView from './features/products/ProductView'

function App() {
  
  return (
    <>
    <Routes>
      <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
      </Route>
      
      <Route element={<ProtectedRouter />}>
        <Route path="/" element={<DashboardLayout />} />
        <Route path="/products" element={<ProductView />}/>
        <Route path="/product/:id" element={<ProductView />}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
