import React from 'react'
import { Routes, Route } from 'react-router-dom'

import User from './contexts/User';

import { Navbar } from "./components";
import { Home, Login, Register } from "./pages";

function App() {

  return (
    <User>
    <Navbar />
      <Routes>
        <Route exact path="/*" element={<Home />}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/register" element={<Register />}/>
      </Routes>
    </User>
  )
}

export default App
