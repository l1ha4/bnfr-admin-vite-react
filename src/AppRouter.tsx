// src\AppRouter.tsx

import { createElement, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  privatePageRoutes,
  publicPageRoutes,
  authPageRoutes,
} from './router/route.ts'


function AppRouter() {
  //TODO сделать реальный статус авторизации юзера
  const currentUser = null
  const routes = useMemo(() => {
    const scopedRoutes = currentUser ? privatePageRoutes : authPageRoutes
    return [...publicPageRoutes, ...scopedRoutes]
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

