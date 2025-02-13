import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Import translations
import en from '../assets/languages/en.json'
import vi from '../assets/languages/vi.json'

i18n
  .use(initReactI18next) // Kích hoạt react-i18next
  .init({
    resources: {
      en: { translation: en },
      vi: { translation: vi },
    },
    fallbackLng: 'en', // Ngôn ngữ mặc định
    interpolation: {
      escapeValue: false, // Không cần escape HTML
    },
  })

export default i18n
