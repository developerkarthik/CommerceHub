//import { useState } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import Login from './features/auth/Login'
import Register from './features/auth/Register'
import DashboardLayout from './features/dashboards/DashboardLayout'

function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<DashboardLayout />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register />} />
    </Routes>
    </>
  )
}

export default App
