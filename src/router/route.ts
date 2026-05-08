import type { IRouterPage } from '@/types/default'
import AuthPage from '@/pages/AuthPage/AuthPage'
import MainPage from '@/pages/MainPage/MainPage'
import DefaultPage from '@/pages/DefaultPage/DefaultPage'
import { DS_PAGES } from '@/pages/Discord/indexDsPages'
import BonfireIDPage from '@/pages/BonfireID/BonfireIDPage/BonfireIDPage';



export const publicPageRoutes: IRouterPage[] = [
  { path: '/', element: DefaultPage }
]

export const authPageRoutes: IRouterPage[] = [
  { path: '/auth', element: AuthPage }
]

export const privatePageRoutes: IRouterPage[] = [
  { path: '/', element: MainPage },
  { path: '/bonfire-id', element: BonfireIDPage },
  ...DS_PAGES
]
