import { createSlice } from '@reduxjs/toolkit'

export interface WalkState {
  walkGroup: {
    id: number
    position: string
    desc: string
    color: string
  },
  walkLocation:{
    lat: string
    lng: string
  }
}

const initialState: WalkState = {
  walkGroup: {
    id: 0,
    position: '',
    desc: '',
    color: '',
  },
  walkLocation:{
    lat: '',
    lng: '',
  }
}

export const walkSlice = createSlice({
  name: 'walkIndex',
  initialState,
  reducers: {
    getWalkLocation: (state, action) => {
      state.walkLocation = action.payload
    },
  },
})

export const { getWalkLocation } = walkSlice.actions

export default walkSlice.reducer
