import { BrowserRouter, Routes, Route } from "react-router-dom"

import PrivateRoutes from "./components/route/PrivateRoutes.jsx"
import GuestRoutes from "./components/route/GuestRoutes.jsx"

import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Admin from './pages/Admin.jsx'

export default function App () {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />

      <Route element={<GuestRoutes />}>
        <Route path="/login" element={<Login />} />
      </Route>

      <Route element={<PrivateRoutes />}>
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  </BrowserRouter>
}