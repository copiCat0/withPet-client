import React, { useEffect, useMemo, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import 'components/App/App.css'
import Diary from 'router/Diary'
import PetInfo from 'router/PetInfo'
import SignIn from 'router/SignIn'
import SignUp from 'router/SignUp'
import Welcome from 'router/Welcome'
import AlreadySignIn from 'router/AlreadySignIn'
import Story from 'router/Story'
import { auth } from 'firebase-config'
import PrivateRoute from 'router/PrivateRoute'
// import { useSelector } from 'react-redux'
// import { RootState } from 'redux/store'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useMemo(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
    })
  }, [isLoggedIn])

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute
              authenticated={isLoggedIn}
              page={'/aleadysignin'}
              component={Welcome}
            />
          }
        />
        <Route
          path="/signin"
          element={
            <PrivateRoute
              authenticated={isLoggedIn}
              page={'/aleadysignin'}
              component={SignIn}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <PrivateRoute
              authenticated={isLoggedIn}
              page={'/aleadysignin'}
              component={SignUp}
            />
          }
        />
        <Route path="/story" element={<Story />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/petinfo" element={<PetInfo />} />
        <Route path="/aleadysignin" element={<AlreadySignIn />} />
      </Routes>
    </>
  )
}

export default App
