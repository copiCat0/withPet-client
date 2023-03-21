import { createSlice } from '@reduxjs/toolkit'

interface PetInfo {
  petBirth: string | null
  petGender: string | null
  petImg: string | null
  petName: string | null
  petNeuter: string | null
  petType: string | null
}

interface UserData {
  userName: string | null
  userEmail: string | null
  userNickname: string | null
  userPetInfo: PetInfo
}

interface AuthState {
  isAuthenticated: boolean
  userData: UserData
}

const initialAuthState: AuthState = {
  isAuthenticated: false,
  userData: {
    userName: '',
    userEmail: '',
    userNickname: '',
    userPetInfo: {
      petBirth: '',
      petGender: '',
      petImg: '',
      petName: '',
      petNeuter: '',
      petType: '',
    },
  },
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
