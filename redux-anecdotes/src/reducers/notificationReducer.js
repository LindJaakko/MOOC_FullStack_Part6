import { createSlice } from '@reduxjs/toolkit'
import { connect } from 'react-redux'

const initialState = null

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    activateNotification(state, action) {
      return action.payload
    },
    clearNotification(state, action) {
      return null
    },
  },
})

export const setNotification = (content, time) => {
  return async (dispatch) => {
    dispatch(activateNotification(content))
    setTimeout(() => {
      dispatch(clearNotification())
    }, time * 1000)
  }
}

export const { activateNotification, clearNotification } =
  notificationSlice.actions
export default notificationSlice.reducer
