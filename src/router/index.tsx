import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../modules/01-auth/pages/Home'
import Login from '../modules/01-auth/pages/Login'
import Register from '../modules/01-auth/pages/Register'
import VerifyEmail from '../modules/01-auth/pages/VerifyEmail'
import Dashboard from '../modules/01-auth/pages/Dashboard'
import Payments from '../modules/01-auth/pages/Payments'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verify" element={<VerifyEmail />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
