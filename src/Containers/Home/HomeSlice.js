import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const Home = createSlice({
  name: '@Home',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    setCount: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { increment, decrement, setCount } = Home.actions

export default Home.reducer