import { configureStore } from '@reduxjs/toolkit'
import  weatherSlice from './diarySlice'

const store = configureStore({
  reducer: {
    weather: weatherSlice,
  },
})

export default store
 