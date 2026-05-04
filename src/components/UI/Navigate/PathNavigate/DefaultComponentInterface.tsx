// src\example\DefaultComponentInterface\DefaultComponentInterface.tsx

import type { FC } from 'react'
import cl from './DefaultComponentInterface.module.scss'

interface DefaultComponentInterfaceProps {
  addClass?: string
}

const DefaultComponentInterface: FC<DefaultComponentInterfaceProps> = ({
  addClass,
}) => {
  return <div className={`${cl.component} ${addClass}`}></div>
}

export default DefaultComponentInterface
