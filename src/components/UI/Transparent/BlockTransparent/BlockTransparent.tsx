// src\components\UI\Transparent\BlockTransparent\BlockTransparent.tsx

import type { FC } from 'react'
import cl from './BlockTransparent.module.scss'

interface BlockTransparentProps {
  addClass?: string
  children: React.ReactNode
}

const BlockTransparent: FC<BlockTransparentProps> = ({
  addClass,
  children,
}) => {
  return <div className={`${cl.component} ${addClass}`}>
    {children}
  </div>
}

export default BlockTransparent
