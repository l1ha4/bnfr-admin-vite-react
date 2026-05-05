// src\components\UI\Discord\MessageDs\EmbedBotDs\EmbedBotDs.tsx

import type { FC } from 'react'
import cl from './EmbedBotDs.module.scss'
import type { IEmbedContent } from '@/types/dsBots'

interface EmbedBotDsProps {
  addClass?: string
  content?: IEmbedContent
}

const EmbedBotDs: FC<EmbedBotDsProps> = ({ addClass, content }) => {
  return (
    <div className={`${cl.component} ${addClass}`}>
      <div className={cl.linear} style={{ background: content?.colorLinear }}></div>
      <div className={cl.content}>{content?.text}</div>
    </div>
  )
}

export default EmbedBotDs
