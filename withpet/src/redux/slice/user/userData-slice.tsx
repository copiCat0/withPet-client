import { createSlice, Slice } from '@reduxjs/toolkit'

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
interface UserState {
  userData: UserData
}

const initialUserState: UserState = {
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

const userSlice: Slice<UserState> = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    create(state, action): void {
      state.userData = { ...state.userData, ...action.payload }
    },
  },
})

export const userAction = userSlice.actions
export default userSlice
