// src\pages\MainPage\MainPage.tsx

import type { FC } from 'react'
import cl from './MainPage.module.scss'
import { titleRouter } from '@/config/app.config'
import { useNavigate } from 'react-router-dom'
import Section from '@/components/UI/Section/Section'

const MainPage: FC = () => {
  const navigate = useNavigate()

  return (
    <div className={`page ${cl.page}`}>
      <h1>Разделы</h1>
      <div className={cl.buttons}>
        {titleRouter.sections.map((item) => (
          <Section
            key={item.path}
            textButton={titleRouter.textButton}
            status={item.status}
            onClick={() => navigate(`/${item.path}`)}
            title={item.title}
          />
        ))}
      </div>
    </div>
  )
}

export default MainPage
