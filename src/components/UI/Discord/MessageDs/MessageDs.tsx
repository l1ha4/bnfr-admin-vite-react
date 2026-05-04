// src\components\UI\Discord\MessageDs\MessageDs.tsx

import { type FC } from 'react'
import cl from './MessageDs.module.scss'
import EmbedBotDs from './EmbedBotDs/EmbedBotDs'
import { useCurrentTime } from '@/hooks/useCurrentTime'

interface MessageDsProps {
  addClass?: string
  username: string
  text?: string
  embed: any
}

const MessageDs: FC<MessageDsProps> = ({ addClass, username, text, embed }) => {
  const time = useCurrentTime()

  return (
    <div className={`${cl.component} ${addClass}`}>
      <div className={cl.avatar}></div>
      <div className={cl.content}>
        <div className={cl.header}>
          <div>
            <span className={cl.username}>{username}</span>
          </div>
          <div className={cl.block_bot}>
            <span>БОТ</span>
          </div>
          <div className={cl.date}>{time}</div>
        </div>
        <div className={cl.message}>
          <span className={cl.text}>{text}</span>
          {embed ? <EmbedBotDs /> : ''}
        </div>
      </div>
    </div>
  )
}

export default MessageDs
