import { configureStore } from '@reduxjs/toolkit'
import highlightesReducer from '../features/highlightes/highlightesReucer'
import whychooseusReducer from '../features/whychooseus/whychooseusSlice'

export const store = configureStore({
  reducer: {
    highlightes:highlightesReducer,
    w:whychooseusReducer
  }
})