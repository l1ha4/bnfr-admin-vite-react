// src\AppProvider.tsx

import type { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { AuthProvider } from './context/AuthContext.tsx'
import { RouteThemeProvider } from './context/RouteThemeContext.tsx'
import { Provider } from 'react-redux'
import { setupStore } from './store/indexStore.ts'

const store = setupStore()

const AppProvider: FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AuthProvider>
          <RouteThemeProvider>
            <App />
          </RouteThemeProvider>
        </AuthProvider>
      </Provider>
    </BrowserRouter>
  )
}

export default AppProvider
