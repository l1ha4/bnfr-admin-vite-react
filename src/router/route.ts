import type { IRouterPage } from '@/types/default'

import DefaultPage from '@/pages/DefaultPage/DefaultPage'


export const publicPageRoutes: IRouterPage[] = [
  { path: '/', element: DefaultPage },
]

export const authPageRoutes: IRouterPage[] = []

export const privatePageRoutes: IRouterPage[] = []
