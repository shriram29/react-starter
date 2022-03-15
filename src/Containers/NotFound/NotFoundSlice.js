import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const NotFound = createSlice({
  name: '@NotFound',
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

export const { increment, decrement, setCount } = NotFound.actions

export default NotFound.reducer