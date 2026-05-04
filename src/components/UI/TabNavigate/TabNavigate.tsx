// src\components\UI\TabNavigate\TabNavigate.tsx

import { useState, type FC } from 'react'
import cl from './TabNavigate.module.scss'
import { useNavigate } from 'react-router-dom'

interface TabNavigateProps {
  addClass?: string
  arrTabs?: { label: string; path: string }[]
}

const TabNavigate: FC<TabNavigateProps> = ({ addClass, arrTabs }) => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState(0)
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
