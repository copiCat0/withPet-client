import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slice/user/auth-slice'
import petInfoReducer from './slice/petInfo/petInfoSlice'
import diaryReducer from './slice/diary/diarySlice'

export const store = configureStore({
  reducer: {
    petInfo: petInfoReducer,
    auth: authSlice.reducer,
    diary: diaryReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
