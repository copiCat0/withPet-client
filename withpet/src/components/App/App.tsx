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

  const userUid = useSelector((state: RootState) => state.auth.userUid)

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

        <Route
          path="/diary"
          element={isLoggedIn && <Diary userUid={userUid} />}
        />
        <Route path="/mypage" element={<MyPage />} />

        <Route
          path="/petinfo"
          element={
            isLoggedIn ? (
              <PetInfo userUid={userUid} />
            ) : (
              <PetInfo userUid={userUid} />
            )
          }
        />

        <Route path="/story" element={<Story />} />
      </Routes>
    </>
  )
}

export default App
