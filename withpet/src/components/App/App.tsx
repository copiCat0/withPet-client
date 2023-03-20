import React from 'react'
import { Route, Routes } from 'react-router-dom'
import 'components/App/App.css'
import SignUp from 'components/SignUp/SignUp'

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
