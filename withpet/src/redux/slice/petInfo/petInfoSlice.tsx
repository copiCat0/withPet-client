import { createSlice } from '@reduxjs/toolkit'

export interface PetInfoState {
  petInfoGroup: {
    petImg: string
    petType: string
    petName: string
    petBirth: string
    petGender: string
    petNeuter: string
  }
}

const initialState: PetInfoState = {
  petInfoGroup: {
    petImg: '',
    petType: '',
    petName: '',
    petBirth: '',
    petGender: 'male',
    petNeuter: 'yes',
  },
}

const petInfoSlice = createSlice({
  name: 'petInfoGroup',
  initialState,
  reducers: {
    getPetInfo: (state, action) => {
      state.petInfoGroup = action.payload
    },
    getPetImg: (state, action) => {
      state.petInfoGroup.petImg = action.payload
    },
  },
})

export const { getPetInfo, getPetImg } = petInfoSlice.actions

export default petInfoSlice.reducer
