// src/features/languageSlice.ts
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { LanguageState } from '../../types/SliceTypes'

const savedLanguage = localStorage.getItem('language') || 'en' // Load ngôn ngữ từ localStorage

const initialState: LanguageState = {
  value: savedLanguage,
}

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    switchLanguage: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

// Export actions
export const { switchLanguage } = languageSlice.actions

// Export reducer
export default languageSlice.reducer
