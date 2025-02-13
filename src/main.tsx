import { HeroUIProvider } from '@heroui/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.tsx'
import { store } from './store/store.tsx'
import './styles/index.css'
import './utils/i18n' // Import i18n

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </HeroUIProvider>
  </StrictMode>,
)

