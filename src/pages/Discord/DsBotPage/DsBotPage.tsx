// src\pages\DiscordBots\DsBotPage\DsBotPage.tsx

import { type FC } from 'react'
import cl from './DsBotPage.module.scss'
import FormNavigate from '@/components/UI/Navigate/FormNavigate/FormNavigate'
import { dsPages } from '@/config/dsBotsPages.config'
import { useAppSelector } from '@/hooks/redux'
import { useNavigate } from 'react-router-dom'
import Section from '@/components/UI/Section/Section'

const DsBotPage: FC = () => {
  const navigate = useNavigate()

  const { selectedBotName } = useAppSelector((state) => state.selectedDsBot)

  return (
    <div className={`page ${cl.page}`}>
      <FormNavigate
        title={`${dsPages.dsBotPage.title} ${selectedBotName}`}
        subtitle={dsPages.dsBotPage.subtitle}
      />
      <div className={cl.sections}>
        <Section
          title={dsPages.dsBotPage.sections.servers.title}
          status={dsPages.dsBotPage.sections.servers.status}
          textButton={dsPages.dsBotPage.sections.servers.textButton}
          onClick={() => navigate(dsPages.dsBotPage.sections.servers.path)}
        />
        <Section
          title={dsPages.dsBotPage.sections.directMessages.title}
          status={dsPages.dsBotPage.sections.directMessages.status}
        />
      </div>
    </div>
  )
}

export default DsBotPage
