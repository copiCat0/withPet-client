import React from 'react'
import { Route, Routes } from 'react-router-dom'
import 'App.css'
import Home from 'router/Home'
import Login from 'router/Login'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
