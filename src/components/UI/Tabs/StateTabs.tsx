import React from 'react'
import type { IStateTabTypes } from './types/state'

interface IStateTabs {
  /** Массив вкладок [ключ, компонент] */
  tabs: IStateTabTypes
  /** Текущая активная вкладка */
  activeTab: string
  /** Функция для изменения активной вкладки */
  onTabChange: (tab: string) => void
  /** Компонент по умолчанию, если activeTab не найден */
  defaultComponent?: string
}

function StateTabs({
  tabs,
  activeTab,
  onTabChange,
  defaultComponent,
}: IStateTabs) {
  const tabMap = React.useMemo(() => new Map(tabs), [tabs])

  const Tab =
    (activeTab ? tabMap.get(activeTab) : undefined) ||
    (defaultComponent ? tabMap.get(defaultComponent) : undefined)

  if (!Tab) return null

  return <Tab onTabChange={onTabChange} />
}

export default StateTabs
