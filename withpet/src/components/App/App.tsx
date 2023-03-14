import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import PetInformation from 'router/PetInformation'

function App() {
  return (
    <>
      <Routes>
        <Route path="/petInfo" element={<PetInformation />} />
      </Routes>
    </>
  )
}

export default App
