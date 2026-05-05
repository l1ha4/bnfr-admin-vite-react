import React from 'react'
import { useLocation } from 'react-router-dom'
import type { IRouterTabTypes } from './types/default'

interface IChildrenTabs {
  router: IRouterTabTypes
  defaultComponent?: string
  /** Индекс сегмента URL (0 = первый после /), где лежит ключ вкладки. По умолчанию использует последний сегмент пути. */
  segmentIndex?: number
}

function Tabs({ router, defaultComponent, segmentIndex }: IChildrenTabs) {
  const location = useLocation()
  const pathParts = location.pathname.split('/').filter(Boolean)
  const effectiveIndex =
    segmentIndex !== undefined ? segmentIndex : pathParts.length - 1
  const tabKey = pathParts[effectiveIndex]

  const tabMap = React.useMemo(() => new Map(router), [router])

  const Tab =
    (tabKey ? tabMap.get(tabKey) : undefined) ||
    (defaultComponent ? tabMap.get(defaultComponent) : undefined)

  if (!Tab) return null

  return <Tab />
}

export default Tabs
