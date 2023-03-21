import { createSlice } from '@reduxjs/toolkit'

export interface PetInfoState {
  petInfoGroup: {
    petImg: string
    petType: string
    petName: string
    petBirth: string
    petGender: string
    petNeuter: string
  },
  isCreate: boolean,
  petInfoId: string
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
  isCreate: false,
  petInfoId: ''
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
    create:(state, action):void => {
      state.isCreate = true
      state.petInfoId = action.payload
    }
  },
})

export const { getPetInfo, getPetImg, create } = petInfoSlice.actions

export default petInfoSlice.reducer
