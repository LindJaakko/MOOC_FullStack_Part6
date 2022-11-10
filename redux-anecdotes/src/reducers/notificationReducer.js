import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(state, action) {},
    resetNotification(state, action) {},
  },
})

export const setNotification = (filter) => {
  return {
    type: 'SET_FILTER',
    filter,
  }
  setErrorMessage(`Note '${note.content}' was already removed from server`)
  setTimeout(() => {
    setErrorMessage(null)
  }, 5000)
}

export const resetNotification = (filter) => {
  return {
    type: 'SET_FILTER',
    filter,
  }
  setErrorMessage(`Note '${note.content}' was already removed from server`)
  setTimeout(() => {
    setErrorMessage(null)
  }, 5000)
}

export const { showNotification } = notificationSlice.actions
export default notificationSlice.reducer
