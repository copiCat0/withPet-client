import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface DiaryState {
  diaryGroup: {
    title: string
    check: number
    date: string
    weather: string
    text: string
    pet: string
    imagesUrl: { id: string; url: string; origin: string }[]
  }
}

const initialState: DiaryState = {
  diaryGroup: {
    title: '',
    check: 0,
    date: '',
    weather: 'sunny',
    text: '',
    pet: '',
    imagesUrl: [{ id: '', url: '', origin: '' }],
  },
}

export const diarySlice = createSlice({
  name: 'diaryGroup',
  initialState,
  reducers: {
    getDiary: (state, action) => {
      state.diaryGroup = action.payload
    },
    addDiaryImg: (state, action) => {
      state.diaryGroup.imagesUrl.push(action.payload)
    },
    updateDiaryImg: (state, action) => {
      const currentData = state.diaryGroup.imagesUrl.filter(
        el => el.origin !== action.payload,
      )
      state.diaryGroup.imagesUrl = currentData
    },
  },
})

export const { getDiary, addDiaryImg, updateDiaryImg } = diarySlice.actions

export default diarySlice.reducer
