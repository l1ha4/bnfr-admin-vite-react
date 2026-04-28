// src\example\DefaultComponent\DefaultComponent.tsx

import type { FC } from 'react'
import cl from './DefaultComponent.module.scss'

const DefaultComponent: FC = () => {
  
  return (
  <div className={cl.component}>
    DefaultComponent
  </div>
)
}

export default DefaultComponent