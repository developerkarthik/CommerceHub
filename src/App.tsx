//import { useState } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import Login from './features/auth/Login'
import Register from './features/auth/Register'
import DashboardLayout from './features/dashboards/DashboardLayout'
import ProtectedRouter from './features/auth/components/ProtectedROuter'
import PublicRoute from './features/auth/components/PublicRoute'

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
      </Route>
    </Routes>
    </>
  )
}

export default App
