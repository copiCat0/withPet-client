import React from 'react'
import { Route, Routes } from 'react-router-dom'
import 'components/App/App.css'
import Diary from 'router/Diary'
import PetInfo from 'router/PetInfo'
import SignIn from 'router/SignIn'
import SignUp from 'router/SignUp'
import Welcome from 'router/Welcome'
import Story from 'router/Story'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import AlreadySignIn from 'components/SignIn/AlreadySignIn'

function App() {
  const isLoggedIn = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  )

  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route
          path="/signin"
          element={!isLoggedIn ? <SignIn /> : <AlreadySignIn />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/story" element={<Story />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/petinfo" element={<PetInfo />} />
      </Routes>
    </>
  )
}

export default App
