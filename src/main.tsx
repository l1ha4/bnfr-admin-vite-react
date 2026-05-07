import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppProvider from './AppProvider.tsx'
import '@/styles/index.css'
import '@/styles/fonts/gg-sans/stylesheet.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider />
  </StrictMode>,
)
