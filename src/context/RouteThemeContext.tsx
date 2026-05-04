import { createContext, useContext, useEffect, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

interface RouteThemeContextValue {
  routeTheme: string | null
}

const RouteThemeContext = createContext<RouteThemeContextValue | null>(null)

export function RouteThemeProvider({ children }: { children: ReactNode }) {
  const location = useLocation()

  useEffect(() => {
    const root = document.documentElement
    const isDiscordBotsRoute = location.pathname.startsWith('/discord')

    if (isDiscordBotsRoute) {
      root.setAttribute('data-route-theme', 'discord')
      return
    }

    root.removeAttribute('data-route-theme')
  }, [location.pathname])

  const routeTheme = document.documentElement.getAttribute('data-route-theme')

  return (
    <RouteThemeContext.Provider value={{ routeTheme }}>
      {children}
    </RouteThemeContext.Provider>
  )
}

export function useRouteTheme() {
  const context = useContext(RouteThemeContext)

  if (!context) {
    throw new Error('useRouteTheme must be used inside RouteThemeProvider')
  }

  return context
}
