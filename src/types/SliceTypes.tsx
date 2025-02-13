import { store } from '../store/store'

// Định nghĩa kiểu cho RootState và AppDispatch
export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export interface LanguageState {
  value: string
}
