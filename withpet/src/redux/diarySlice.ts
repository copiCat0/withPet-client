import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface WeatherState {
  weather: string
}

const initialState: WeatherState = {
  weather: '',
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    chooseWeather: (state, action: PayloadAction<string>) => {
      state.weather = action.payload
    },
  },
})

export const { chooseWeather } = weatherSlice.actions

export default weatherSlice.reducer
