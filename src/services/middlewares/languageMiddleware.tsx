// src/app/middleware/languageMiddleware.ts
import { Middleware } from '@reduxjs/toolkit'
import { switchLanguage } from '../../store/slices/languageSlice'

export const languageMiddleware: Middleware = () => (next) => (action) => {
  if (switchLanguage.match(action)) {
    localStorage.setItem('language', action.payload) // Lưu ngôn ngữ vào localStorage
  }
  return next(action)
}
