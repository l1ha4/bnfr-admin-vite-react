// src\example\BlockTransparent\BlockTransparent.tsx

import type { FC } from 'react'
import cl from './BlockTransparent.module.scss'

interface BlockTransparentProps {
  addClass?: string
}

const BlockTransparent: FC<BlockTransparentProps> = ({
  addClass,
}) => {
  return <div className={`${cl.component} ${addClass}`}></div>
}

export default BlockTransparent
