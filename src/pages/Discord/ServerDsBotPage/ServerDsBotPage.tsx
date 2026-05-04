// src\pages\Discord\ServerDsBotPage\ServerDsBotPage.tsx

import type { FC } from 'react'
import cl from './ServerDsBotPage.module.scss'
import FormNavigate from '@/components/UI/Navigate/FormNavigate/FormNavigate'
import { dsPages } from '@/config/dsBotsPages.config'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '@/hooks/redux'
import Tabs from '@/components/UI/Tabs/Tabs'
import TabNavigate from '@/components/UI/TabNavigate/TabNavigate'
import { routerTabs } from './tabs/routerTabs'

const ServerDsBotPage: FC = () => {
  const navigate = useNavigate()
  const { selectedBotName } = useAppSelector((state) => state.selectedDsBot)
  const { selectedServerName } = useAppSelector((state) => state.selectedDsBot)

  return (
    <div className={`page ${cl.page}`}>
      <FormNavigate
        title={`${dsPages.dsBotServerAction.title} ${selectedBotName} на сервере ${selectedServerName}`}
        subtitle={dsPages.dsBotServerAction.subtitle}
      />
      <div className={cl.tabs}>
        <TabNavigate arrTabs={[{ label: 'Функции', path: 'functions' }, { label: 'Действия', path: 'actions' }, { label: 'Участники', path: 'members' }]} />
        <Tabs router={routerTabs} defaultComponent='functions'/>
      </div>
    </div>
  )
}

export default ServerDsBotPage
