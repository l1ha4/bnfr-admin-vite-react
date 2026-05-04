// src\AppRouter.tsx

import { createElement, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  privatePageRoutes,
  publicPageRoutes,
  authPageRoutes,
} from './router/route.ts'
import { useAuth } from './context/AuthContext.tsx'

function AppRouter() {
  const { isAuth: currentUser } = useAuth()

  const routes = useMemo(() => {
    const scopedRoutes = currentUser ? privatePageRoutes : authPageRoutes

    const publicWithoutDuplicates = publicPageRoutes.filter(
      (publicRoute) =>
        !scopedRoutes.some(
          (scopedRoute) => scopedRoute.path === publicRoute.path,
        ),
    )

    return [...scopedRoutes, ...publicWithoutDuplicates]
  }, [currentUser])

  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={createElement(element)} />
      ))}
    </Routes>
  )
}

export default AppRouter
