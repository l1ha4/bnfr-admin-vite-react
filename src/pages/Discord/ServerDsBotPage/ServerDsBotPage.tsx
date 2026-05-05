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
  const pathPage = '/discord/bots/bot/servers/server'
  return (
    <div className={`page ${cl.page}`}>
      <FormNavigate
        title={`${dsPages.dsBotServerAction.title} ${selectedBotName} на сервере ${selectedServerName}`}
        subtitle={dsPages.dsBotServerAction.subtitle}
        returnPath="/discord/bots/bot/servers"
      />
      <div className={cl.tabs}>
        <TabNavigate
          arrTabs={[
            { label: 'Функции', path: `${pathPage}/functions` },
            { label: 'Действия', path: `${pathPage}/actions` },
            { label: 'Участники', path: `${pathPage}/members` },
          ]}
        />
        <Tabs
          router={routerTabs}
          segmentIndex={5}
          defaultComponent="functions"
        />
      </div>
    </div>
  )
}

export default ServerDsBotPage
