import React from 'react'
import { Route, Routes } from 'react-router-dom'
import 'components/App/App.css'
import SignIn from 'router/SignIn'
import Welcome from 'router/Welcome'
import Diary from 'router/Diary'
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
        <Route path="/welcome" element={<Welcome />} />
        <Route
          path="/signin"
          element={!isLoggedIn ? <SignIn /> : <AlreadySignIn />}
        />
        <Route path="/diary" element={<Diary />} />
      </Routes>
    </>
  )
}

export default App
