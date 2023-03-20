import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slice/user/auth-slice'
import petInfoReducer from './slice/petInfo/petInfoSlice'
import weatherReducer from './slice/diary/diarySlice'

export const store = configureStore({
  reducer: {
    petInfo: petInfoReducer,
    auth: authSlice.reducer,
    weather: weatherReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
