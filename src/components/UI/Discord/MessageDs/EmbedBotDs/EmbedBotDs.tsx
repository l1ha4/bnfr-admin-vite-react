// src\components\UI\Discord\MessageDs\EmbedBotDs\EmbedBotDs.tsx

import type { FC } from 'react'
import cl from './EmbedBotDs.module.scss'

interface EmbedBotDsProps {
  addClass?: string
}

const EmbedBotDs: FC<EmbedBotDsProps> = ({ addClass }) => {
  return (
    <div className={`${cl.component} ${addClass}`}>
      <div className={cl.linear}></div>
      <div className={cl.content}>Test</div>
    </div>
  )
}

export default EmbedBotDs
