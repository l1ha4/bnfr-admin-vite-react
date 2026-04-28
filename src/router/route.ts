import type { IRouterPage } from '@/types/default'
import AuthPage from '@/pages/AuthPage/AuthPage'


export const publicPageRoutes: IRouterPage[] = [
  { path: '/', element: AuthPage },
]

export const authPageRoutes: IRouterPage[] = []

export const privatePageRoutes: IRouterPage[] = []
