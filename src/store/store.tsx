// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit'
import { languageMiddleware } from '../services/middlewares/languageMiddleware'
import { languageSlice } from './slices/languageSlice'

export const store = configureStore({
  reducer: {
    // Các reducers sẽ được thêm vào đây
    language: languageSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(languageMiddleware),
})
