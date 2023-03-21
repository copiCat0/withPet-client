import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface DiaryState {
  diaryGroup: {
    title: string
    check: number
    date: string
    weather: string
    text: string
    pet: string
  }
}

const initialState: DiaryState = {
  diaryGroup: {
    title: '',
    check: 0,
    date: '',
    weather: '',
    text: '',
    pet:''
  },
}

export const diarySlice = createSlice({
  name: 'diaryGroup',
  initialState,
  reducers: {
    getDiary: (state, action) => {
      state.diaryGroup = action.payload
    },
  },
})

export const { getDiary } = diarySlice.actions

export default diarySlice.reducer
