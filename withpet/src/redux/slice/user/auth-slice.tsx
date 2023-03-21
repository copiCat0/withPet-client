import { createSlice } from '@reduxjs/toolkit'
import { getAuth } from 'firebase/auth'

interface AuthState {
  isAuthenticated: boolean
  userUid: string
}

const initialAuthState: AuthState = {
  isAuthenticated: false,
  userUid: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state): void {
      const user = getAuth()
      state.isAuthenticated = true
      state.userUid = user.currentUser?.uid as unknown as string
    },
    logout(state): void {
      state.isAuthenticated = false
    },
  },
})

export const authAction = authSlice.actions
export default authSlice
