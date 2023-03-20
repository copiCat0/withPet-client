import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface DiaryState {
  diaryGroup:{
    weather: string
    check: number
    date: string
  }
}

const initialState: DiaryState = {
    diaryGroup:{
    weather: '',
    check:0,
    date:''
  }
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
