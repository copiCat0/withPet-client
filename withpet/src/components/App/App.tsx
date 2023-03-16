import React from 'react'
import { Route, Routes } from 'react-router-dom'
import 'components/App/App.css'
import SignIn from 'router/SignIn'
import Welcome from 'router/Welcome'

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  )
}

export default App
