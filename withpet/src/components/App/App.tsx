import React, { useEffect, useState } from 'react'
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
import { onAuthStateChanged } from 'firebase/auth'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/store'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const userData = useSelector((state: RootState) => state.user.userData)

  console.log(userData)

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setIsLoggedIn(true)
        console.log(user)
      } else {
        setIsLoggedIn(false)
        console.log('로그아웃!')
      }
    })
  }, [])

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <AlreadySignIn /> : <Welcome />}
        />
        <Route
          path="/signin"
          element={isLoggedIn ? <AlreadySignIn /> : <SignIn />}
        />
        <Route
          path="/signup"
          element={isLoggedIn ? <AlreadySignIn /> : <SignUp />}
        />
        <Route path="/story" element={<Story />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/petinfo" element={<PetInfo />} />
      </Routes>
    </>
  )
}

export default App
