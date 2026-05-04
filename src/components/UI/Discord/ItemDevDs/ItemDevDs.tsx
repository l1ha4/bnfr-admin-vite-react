// src\components\UI\Discord\ItemDevDs\ItemDevDs.tsx

import type { FC } from 'react'
import cl from './ItemDevDs.module.scss'

interface ItemDevDsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  addClass?: string
  name: string
  avatar: string
  status: boolean | null
}

const ItemDevDs: FC<ItemDevDsProps> = ({
  addClass,
  name,
  avatar,
  status,
  ...props
}) => {
  return (
    <button className={`${cl.component} ${addClass}`} {...props}>
      <div className={cl.avatar} style={{ backgroundImage: `url(${avatar})` }}>
        {status && (
          <div
            className={cl.indicator_active}
            style={{ backgroundColor: `${status ? 'green' : 'red'}` }}
          ></div>
        )}
      </div>
      <span>{name}</span>
    </button>
  )
}

export default ItemDevDs
