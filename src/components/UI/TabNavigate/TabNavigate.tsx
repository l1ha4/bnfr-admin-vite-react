// src\components\UI\TabNavigate\TabNavigate.tsx

import { useEffect, useState, type FC } from 'react'
import cl from './TabNavigate.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'

interface TabNavigateProps {
  addClass?: string
  arrTabs?: { label: string; path: string }[]
}

const TabNavigate: FC<TabNavigateProps> = ({ addClass, arrTabs }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    if (!arrTabs?.length) return

    const currentIndex = arrTabs.findIndex((tab) => {
      if (location.pathname === tab.path) return true

      // Позволяет считать таб активным для вложенных маршрутов после :tab.
      return location.pathname.startsWith(`${tab.path}/`)
    })
    if (currentIndex >= 0) {
      setActiveTab(currentIndex)
    }
  }, [arrTabs, location.pathname])

  return (
    <div className={`${cl.component} ${addClass}`}>
      {arrTabs?.map((tab, index) => (
        <button
          onClick={() => {
            setActiveTab(index)
            navigate(tab.path)
          }}
          key={index}
          className={`${cl.tab} ${activeTab === index ? cl.tabActive : ''}`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

export default TabNavigate
