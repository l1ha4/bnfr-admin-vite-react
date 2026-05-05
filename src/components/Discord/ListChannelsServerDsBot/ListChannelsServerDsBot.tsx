// src\components\Discord\ListChannelsServerDsBot\ListChannelsServerDsBot.tsx

import { useEffect, type FC } from 'react'
import cl from './ListChannelsServerDsBot.module.scss'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { fetchChannelsServers } from '@/store/dsBots/listChannelsServerDsBot/listChannelsServerDsBot.slice'
import ItemChannelServerDsBot from './ItemChannelServerDsBot/ItemChannelServerDsBot'
import { setSelectedChannelId } from '@/store/dsBots/selectedDsBot/selectedDsBot.slice'

interface ListChannelsServerDsBotProps {
  addClass?: string
}

const ListChannelsServerDsBot: FC<ListChannelsServerDsBotProps> = ({
  addClass,
}) => {
  const dispatch = useAppDispatch()

  const { items, isLoading, error } = useAppSelector(
    (state) => state.listChannelsServerDsBot,
  )

  const { selectedChannelId } = useAppSelector((state) => state.selectedDsBot)

  useEffect(() => {
    dispatch(fetchChannelsServers())
  }, [dispatch])

  return (
    <div className={`${cl.component} ${addClass}`}>
      <h4>Текстовые каналы</h4>
      {isLoading && <p>Загрузка каналов...</p>}
      {error && <p>Ошибка загрузки каналов: {error}</p>}
      {isLoading || error ? null : (
        <div className={cl.list}>
          {items.length === 0 && <p>Каналы не найдены.</p>}
          {items.map((channel) => (
            <ItemChannelServerDsBot
              key={channel.id}
              onClick={() => dispatch(setSelectedChannelId(channel.id))}
              active={selectedChannelId === channel.id}
            >
              {channel.name}
            </ItemChannelServerDsBot>
          ))}
        </div>
      )}
    </div>
  )
}

export default ListChannelsServerDsBot
