import React from 'react'
import { Route, Routes } from 'react-router-dom'
import 'components/App/App.css'
import Diary from 'router/Diary'
import PetInfo from 'router/PetInfo'
import SignIn from 'router/SignIn'
import SignUp from 'router/SignUp'
import Welcome from 'router/Welcome'
import MyPage from 'router/MyPage'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import AlreadySignIn from 'components/SignIn/AlreadySignIn'

function App() {
  const isLoggedIn = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  )

  const userUid = useSelector((state: RootState) => state.auth.userUid)

  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route
          path="/signin"
          element={!isLoggedIn ? <SignIn /> : <AlreadySignIn />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/mypage" element={<MyPage />} />

        <Route
          path="/petinfo"
          element={isLoggedIn ? <PetInfo userUid={userUid} /> :  <PetInfo userUid={userUid}/> }
        />
      </Routes>
    </>
  )
}

export default App
