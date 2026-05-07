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
      <div
        className={cl.linear}
        style={{ background: content?.colorLinear }}
      ></div>

      <div className={cl.content}>
        <div className={cl.content_container}>
          <div>
            {content?.title && <div className={cl.title}>{content.title}</div>}
            {content?.text && <div className={cl.text}>{content.text}</div>}
          </div>
          {content?.urlImageSide && (
            <div
              className={cl.imageSide}
              style={{ backgroundImage: `url(${content.urlImageSide})` }}
            ></div>
          )}
        </div>
        {content?.urlImageBottom && (
          <img
            className={cl.imageBottom}
            src={content.urlImageBottom}
            alt=""
          />
        )}
      </div>
    </div>
  )
}

export default EmbedBotDs
