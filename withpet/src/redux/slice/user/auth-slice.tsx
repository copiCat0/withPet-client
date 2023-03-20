import { createSlice } from '@reduxjs/toolkit'

interface AuthState {
  isAuthenticated: boolean
}

const initialAuthState: AuthState = {
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state): void {
      state.isAuthenticated = true
    },
    logout(state): void {
      state.isAuthenticated = false
    },
  },
})

export const authAction = authSlice.actions
export default authSlice
