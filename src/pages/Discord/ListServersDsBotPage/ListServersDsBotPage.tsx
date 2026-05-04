// src\pages\ListServersDsBotPage\ListServersDsBotPage.tsx

import { useEffect, type FC } from 'react'
import cl from './ListServersDsBotPage.module.scss'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { fetchServers } from '@/store/dsBots/listServersDsBot/listServersDsBot.slice'
import { useNavigate } from 'react-router-dom'
import FormNavigate from '@/components/UI/Navigate/FormNavigate/FormNavigate'
import { dsPages } from '@/config/dsBotsPages.config'
import { setSelectedServerId } from '@/store/dsBots/selectedDsBot/selectedDsBot.slice'
import ItemDevDiscord from '@/components/UI/Discord/ItemDevDs/ItemDevDs'

const ListServersDsBotPage: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const {
    items: servers,
    isLoading,
    error,
  } = useAppSelector((state) => state.listServersDsBot)

  useEffect(() => {
    dispatch(fetchServers())
  }, [dispatch])

  return (
    <div className={`page ${cl.page}`}>
      <FormNavigate
        title={`${dsPages.listServersDsBot.title}`}
        subtitle={dsPages.listServersDsBot.subtitle}
      />
      <div className={cl.servers}>
        {isLoading && <p>Загрузка серверов...</p>}
        {error && <p className={cl.error}>{error}</p>}
        {!isLoading && !error && servers.length === 0 && (
          <p>Бот не состоит ни в одном сервере</p>
        )}
        {!isLoading &&
          !error &&
          servers.length > 0 &&
          servers.map((server) => (
            <ItemDevDiscord
              key={server.id}
              name={server.name}
              avatar={server.icon}
              status={null}
              onClick={() => {
                dispatch(setSelectedServerId({ id: server.id, name: server.name }))
                navigate(`/discord/bots/bot/servers/server-action`)
              }}
            />
          ))}
      </div>
    </div>
  )
}

export default ListServersDsBotPage
