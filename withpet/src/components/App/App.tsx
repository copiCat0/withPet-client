import React from 'react'
import { Route, Routes } from 'react-router-dom'
import 'components/App/App.css'
import SignUp from 'components/SignUp/SignUp'
import Diary from 'router/Diary'

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/diary" element={<Diary />} />
      </Routes>
    </>
  )
}

export default App