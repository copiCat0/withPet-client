import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth-slice'
import petInfoReducer from './slice/petInfo/petInfoSlice'

export const store = configureStore({
  reducer: {
    petInfo: petInfoReducer,
    auth: authSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store