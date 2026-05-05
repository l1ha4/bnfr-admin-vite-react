// src\pages\Discord\ServerDsBotPage\tabs\ActionsSDBTab\ActionsSDBTab.tsx

import type { FC } from 'react'
import cl from './ActionsSDBTab.module.scss'
import ButtonTransparent from '@/components/UI/Transparent/ButtonTransparent/ButtonTransparent'
import Section from '@/components/UI/Section/Section'
import { useLocation, useNavigate } from 'react-router-dom'
import Tabs from '@/components/UI/Tabs/Tabs'
import { routerTabs } from './tabs/routerTabs'

const ActionsSDBTab: FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const baseActionsPath = '/discord/bots/bot/servers/server/actions'
  const isActionsRoot = location.pathname === baseActionsPath

  if (!isActionsRoot) {
    return <Tabs router={routerTabs} segmentIndex={6} />
  }

  return (
    <div className={cl.tab}>
      <div className={cl.titleBlockTab}>
        <h2>Действия бота</h2>
        <ButtonTransparent iconSvg="plus">добавить действие</ButtonTransparent>
      </div>
      <div className={cl.actionsList}>
        <Section
          title="Отправить сообщение в текстовый канал"
          status="active"
          textButton="отправить"
          onClick={() => navigate(`${baseActionsPath}/push-message`)}
        />
      </div>
    </div>
  )
}

export default ActionsSDBTab
