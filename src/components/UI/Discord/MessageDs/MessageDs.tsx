// src\components\UI\Discord\MessageDs\MessageDs.tsx

import { type FC } from 'react'
import cl from './MessageDs.module.scss'
import EmbedBotDs from './EmbedBotDs/EmbedBotDs'
import { useCurrentTime } from '@/hooks/useCurrentTime'

interface MessageDsProps {
  addClass?: string
  username?: string
  content?: { type: 'text' | 'embed'; content: string | any }[]
  avatarUrl?: string | null
}

const MessageDs: FC<MessageDsProps> = ({ addClass, username, content, avatarUrl }) => {
  const time = useCurrentTime()

  return (
    <div className={`${cl.component} ${addClass}`}>
      <div className={cl.avatar} style={{ backgroundImage: `url(${avatarUrl})` }}></div>
      <div className={cl.content}>
        <div className={cl.header}>
          <div>
            <span className={cl.username}>{username ?? 'Unknown'}</span>
          </div>
          <div className={cl.block_bot}>
            <span>БОТ</span>
          </div>
          <div className={cl.date}>{time}</div>
        </div>
        <div className={cl.message}>
          {content && content.length > 0
            ? content.map((item, index) => {
                if (item.type === 'text') {
                  return (
                    <span key={index} className={cl.text}>
                      {item.content}
                    </span>
                  )
                }
                if (item.type === 'embed') {
                  return <EmbedBotDs key={index} {...item.content} />
                }
                return null
              })
            : null}
        </div>
      </div>
    </div>
  )
}

export default MessageDs
