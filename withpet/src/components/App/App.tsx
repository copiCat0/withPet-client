import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import 'components/App/App.css'
import Diary from 'router/Diary'
import PetInfo from 'router/PetInfo'
import SignIn from 'router/SignIn'
import SignUp from 'router/SignUp'
import Welcome from 'router/Welcome'
import MyPage from 'router/MyPage'
import Story from 'router/Story'
import AlreadySignIn from 'router/AlreadySignIn'
import { auth } from 'firebase-config'
import { onAuthStateChanged } from 'firebase/auth'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

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
        <Route path="/diary" element={isLoggedIn && <Diary />} />

        <Route path="/mypage" element={<MyPage />} />
        <Route path="/petinfo" element={isLoggedIn && <PetInfo />} />
        <Route path="/story" element={<Story />} />
      </Routes>
    </>
  )
}

export default App
