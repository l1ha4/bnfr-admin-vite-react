// src\AppRouter.tsx

import type { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'

const AppProvider: FC = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

export default AppProvider
