import { createSlice } from '@reduxjs/toolkit'


export interface StoryState {
  storyGroup: {
    visibility: boolean
  }

}

const initialState: StoryState = {
  storyGroup: {
    visibility: true
  }

}

export const storySlice = createSlice({
  name: 'story',
  initialState,
  reducers: {
    getVisibility: (state, action) => {
      state.storyGroup = action.payload
    },
  },
})

export const { getVisibility } = storySlice.actions

export default storySlice.reducer
