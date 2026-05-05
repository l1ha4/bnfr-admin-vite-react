// src\components\UI\Transparent\ItemTransparent\ItemTransparent.tsx

import type { FC } from 'react'
import cl from './ItemTransparent.module.scss'

interface ItemTransparentProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  addClass?: string
  children?: React.ReactNode
}

const ItemTransparent: FC<ItemTransparentProps> = ({
  addClass,
  children,
  ...props
}) => {
  return <button className={`${cl.component} ${addClass}`} {...props}>{children}</button>
}

export default ItemTransparent
