import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification(state, action) {},
  },
})

export const { showNotification } = notificationSlice.actions
export default notificationSlice.reducer