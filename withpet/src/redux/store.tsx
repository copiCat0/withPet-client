import { configureStore } from '@reduxjs/toolkit'

import authSlice from 'redux/slice/user/auth-slice'
import petInfoReducer from 'redux/slice/petInfo/petInfoSlice'
import diaryReducer from './slice/diary/diarySlice'
import userSlice from 'redux/slice/user/userData-slice'

export const store = configureStore({
  reducer: {
    petInfo: petInfoReducer,
    auth: authSlice.reducer,
    diary: diaryReducer,
    user: userSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
