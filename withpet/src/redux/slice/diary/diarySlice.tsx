import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface DiaryState {
  diaryGroup: {
    title: string
    check: number
    date: string
    weather: string
    text: string
    pet: string
    imagesUrl: string[]
  },
  attachment:string[]
}

const initialState: DiaryState = {
  diaryGroup: {
    title: '',
    check: 0,
    date: '',
    weather: 'sunny',
    text: '',
    pet: '',
    imagesUrl: [],
  },
  attachment:[]
}

export const diarySlice = createSlice({
  name: 'diaryGroup',
  initialState,
  reducers: {
    getDiary: (state, action) => {
      state.diaryGroup = action.payload
    },
    getImgList:(state,action)=>{
      state.attachment = action.payload
    },
    addDiaryImg: (state, action) => {
      state.diaryGroup.imagesUrl.push(action.payload)
    },

  },
})

export const { getDiary, getImgList, addDiaryImg } = diarySlice.actions

export default diarySlice.reducer
