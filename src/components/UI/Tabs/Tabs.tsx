import React from 'react'
import { useLocation } from 'react-router-dom'
import type { IRouterTabTypes } from '../../../types/IRouterTabType'

interface IChildrenTabs {
  router: IRouterTabTypes
  defaultComponent?: string
  /** Индекс сегмента URL (0 = первый после /), где лежит ключ вкладки. По умолчанию 1 — как у /profile/settings и /login/auth. */
  segmentIndex?: number
}

function Tabs({ router, defaultComponent, segmentIndex = 1 }: IChildrenTabs) {
  const location = useLocation()
  const pathParts = location.pathname.split('/').filter(Boolean)
  const tabKey =
    pathParts.length > segmentIndex ? pathParts[segmentIndex] : undefined

  const tabMap = React.useMemo(() => new Map(router), [router])

  const Tab =
    (tabKey ? tabMap.get(tabKey) : undefined) ||
    (defaultComponent ? tabMap.get(defaultComponent) : undefined)

  if (!Tab) return null

  return <Tab />
}

export default Tabs
