// src\pages\ListDsBotsPage\ListDsBotsPage.tsx

import { useEffect, type FC } from 'react'
import cl from './ListDsBotsPage.module.scss'
import ItemDevDiscord from '@/components/UI/Discord/ItemDevDs/ItemDevDs'
import ItemPlusDevDs from '@/components/UI/Discord/ItemPlusDevDs/ItemPlusDevDs'
import FormNavigate from '@/components/UI/Navigate/FormNavigate/FormNavigate'
import { dsPages } from '@/config/dsBotsPages.config'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { fetchBots } from '@/store/dsBots/listDsBots/listDsBots.slice'
import { setSelectedBotId } from '@/store/dsBots/selectedDsBot/selectedDsBot.slice'

const ListDsBotsPage: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const {
    items: bots,
    isLoading,
    error,
  } = useAppSelector((state) => state.dsBots)

  useEffect(() => {
    dispatch(fetchBots())
  }, [dispatch])

  const handleBotClick = (botId: string, botName: string) => {
    dispatch(setSelectedBotId({ id: botId, name: botName }))
    navigate(`/discord/bots/bot`)
  }

  return (
    <div className={`page ${cl.page}`}>
      <FormNavigate
        title={dsPages.discordBots.title}
        subtitle={dsPages.discordBots.subtitle}
      />
      <div className={cl.list_bots}>
        {isLoading && <p>Загрузка ботов...</p>}
        {error && <p className={cl.error}>{error}</p>}
        {!isLoading &&
          !error &&
          bots.map((bot) => (
            <ItemDevDiscord
              key={bot.id}
              name={bot.name}
              avatar={bot.avatar}
              status={bot.status === 'ACTIVE'}
              onClick={() => handleBotClick(bot.id, bot.name)}
            />
          ))}
        <ItemPlusDevDs onClick={() => navigate('/discord/bots/add')} />
      </div>
    </div>
  )
}

export default ListDsBotsPage
