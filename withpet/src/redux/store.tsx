import { configureStore } from '@reduxjs/toolkit'

import authSlice from 'redux/slice/user/auth-slice'
import petInfoReducer from 'redux/slice/petInfo/petInfoSlice'
import diaryReducer from './slice/diary/diarySlice'
import storyReducer from 'redux/slice/story/storySlice'
import walkReducer from 'redux/slice/walkIndex/walkIndexSlice'

export const store = configureStore({
  reducer: {
    petInfo: petInfoReducer,
    auth: authSlice.reducer,
    diary: diaryReducer,
    story: storyReducer,
    walk: walkReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
