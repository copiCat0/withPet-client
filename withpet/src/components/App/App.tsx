import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import PetInfo from 'router/PetInfo'

function App() {
  return (
    <>
      <Routes>
        <Route path="/petInfo" element={<PetInfo />} />
      </Routes>
    </>
  )
}

export default App
