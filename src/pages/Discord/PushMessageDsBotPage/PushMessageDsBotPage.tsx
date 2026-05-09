// src\pages\PushMessageDsBotPage\PushMessageDsBotPage.tsx

import { useEffect, useState, type FC } from 'react'
import cl from './PushMessageDsBotPage.module.scss'
import FormNavigate from '@/components/UI/Navigate/FormNavigate/FormNavigate'
import { dsPages } from '@/config/dsBotsPages.config'
import MessageDs from '@/components/UI/Discord/MessageDs/MessageDs'
import InputDefault from '@/components/UI/InputDefault/InputDefault'
import ButtonDefault from '@/components/UI/ButtonDefault/ButtonDefault'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { fetchChannelsServers } from '@/store/dsBots/listChannelsServerDsBot/listChannelsServerDsBot.slice'
import { setSelectedChannelId } from '@/store/dsBots/selectedDsBot/selectedDsBot.slice'
import { botsApi } from '@/shared/api/dsBots.api'
import ColorPickerDefault from '@/components/UI/ColorPickerDefault/ColorPickerDefault'

const PushMessageDsBotPage: FC = () => {
  const dispatch = useAppDispatch()

  const { items, isLoading, error } = useAppSelector(
    (state) => state.listChannelsServerDsBot,
  )
  useEffect(() => {
    dispatch(fetchChannelsServers())
  }, [dispatch])

  const {
    selectedChannelId,
    selectedBotId,
    selectedServerId,
    selectedBotName,
  } = useAppSelector((state) => state.selectedDsBot)
  const [messageText, setMessageText] = useState('') // Состояние для текста сообщения
  const handleSendMessage = () => {
    botsApi.pushMessageDsBot({
      botId: selectedBotId || '', // Убедитесь, что botId не undefined
      serverId: selectedServerId || '', // Убедитесь, что serverId не undefined
      channelId: selectedChannelId || '', // Убедитесь, что channelId не undefined
      message: messageText,
    })
    console.log('Отправляем сообщение в канал с ID:', selectedChannelId)
  }

  return (
    <div className={`page ${cl.page}`}>
      <FormNavigate
        title={`${dsPages.dsBotPushMessage.title} `}
        subtitle={dsPages.dsBotPushMessage.subtitle}
      />
      <div className={cl.content}>
        <div className={cl.channels}>
          <h3>Текстовые каналы:</h3>
          {isLoading && <p>Загрузка каналов...</p>}
          {error && <p>Ошибка загрузки каналов: {error}</p>}
          {items && items.length > 0 && (
            <ul className={cl.list_channels}>
              {items.map((channel) => (
                <li
                  className={`${cl.channel_item} ${
                    selectedChannelId === channel.id ? cl.selected : ''
                  }`}
                  onClick={() => dispatch(setSelectedChannelId(channel.id))}
                  key={channel.id}
                >
                  {channel.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className={cl.block_messages}>
          <div>
            <MessageDs
              username={selectedBotName || 'Bot'}
              content={
                messageText
                  ? [{ type: 'text', content: messageText }]
                  : undefined
              }
            />
          </div>
          <div className={cl.block_create_message}>
            <h3>Новое сообщение</h3>
            <div className={cl.block_input}>
              <h4>Введите текст сообщения:</h4>
              <InputDefault
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
              />
              <ButtonDefault addClass={cl.button} onClick={handleSendMessage}>
                Отправить
              </ButtonDefault>
              <ColorPickerDefault />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PushMessageDsBotPage
