import React from 'react'
import { Route, Routes } from 'react-router-dom'
import 'components/App/App.css'
import SignIn from 'router/SignIn'
import Welcome from 'router/Welcome'
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
        {/* <Route
          path="/signin"
          element={!isLoggedIn ? <SignIn /> : <AlreadySignIn />}
        /> */}
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  )
}

export default App
