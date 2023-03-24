import { createSlice } from '@reduxjs/toolkit'

export interface WalkState {
  walkGroup: {
    id: number
    position: string
    desc: string
    color: string
  }
  walkLocation: {
    lat: string
    lng: string
  }
  walkLoading: boolean
  walkWeather: {
    temp: number
    rain: number
    air: number
  }
  walkSMCARD: {
    title: string
    position: string
    width: string
    height: string
    count: number
    unit: string
  }[]
}

const initialState: WalkState = {
  walkGroup: {
    id: 0,
    position: '',
    desc: '',
    color: '',
  },
  walkLocation: {
    lat: '',
    lng: '',
  },
  walkLoading: false,
  walkWeather: {
    temp: 0,
    rain: 0,
    air: 0,
  },
  walkSMCARD: [
    {
      title: '현재온도',
      position: '-3px -189px',
      width: '24px',
      height: '30px',
      count: 0,
      unit: '℃',
    },
    {
      title: '강수량',
      position: '-41px -189px',
      width: '30px',
      height: '29px',
      count: 0,
      unit: 'mm',
    },
    {
      title: '미세먼지',
      position: '-83px -189px',
      width: '28px',
      height: '30px',
      count: 0,
      unit: '㎍/㎥',
    },
  ],
}

export const walkSlice = createSlice({
  name: 'walkIndex',
  initialState,
  reducers: {
    getWalkLocation: (state, action) => {
      state.walkLocation = action.payload
    },
    getWalkLoading: (state, action) => {
      state.walkLoading = action.payload
    },
    getWalkWeather: (state, action) => {
      state.walkWeather = action.payload
    },
    updateTemp: (state, action) => {
      state.walkSMCARD[0].count = action.payload
    },
    updateRain: (state, action) => {
      state.walkSMCARD[1].count = action.payload
    },
    updateAir: (state, action) => {
      state.walkSMCARD[2].count = action.payload
    },
  },
})

export const {
  getWalkLocation,
  getWalkLoading,
  getWalkWeather,
  updateTemp,
  updateRain,
  updateAir,
} = walkSlice.actions

export default walkSlice.reducer
