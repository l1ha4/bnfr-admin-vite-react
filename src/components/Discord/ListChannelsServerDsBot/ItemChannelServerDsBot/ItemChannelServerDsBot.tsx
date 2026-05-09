// src\components\Discord\ListChannelsServerDsBot\ItemChannelServerDsBot\ItemChannelServerDsBot.tsx

import { type FC } from 'react'
import cl from './ItemChannelServerDsBot.module.scss'

interface ItemChannelServerDsBotProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  addClass?: string
  children?: React.ReactNode
  active?: boolean
}

const ItemChannelServerDsBot: FC<ItemChannelServerDsBotProps> = ({
  addClass,
  children,
  active,
  ...props
}) => {
  return (
    <button
      className={`${cl.component} ${addClass} ${active ? cl.active : ''}`}
      {...props}
    >
      <div className={cl.item}>#</div>
      <div className={cl.text}>{children}</div>
    </button>
  )
}

export default ItemChannelServerDsBot
