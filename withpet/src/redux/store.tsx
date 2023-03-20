import { configureStore } from '@reduxjs/toolkit'
import petInfoReducer from './slice/petInfo/petInfoSlice'


export const store = configureStore({
  reducer: {
    petInfo: petInfoReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
