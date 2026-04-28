// src\pages\DefaultPage\DefaultPage.tsx

import type { FC } from 'react'
import cl from './DefaultPage.module.scss'

const DefaultPage: FC = () => {

  return (
  <div className={`page ${cl.page}`}>
    DefaultPage
  </div>
)
}

export default DefaultPage