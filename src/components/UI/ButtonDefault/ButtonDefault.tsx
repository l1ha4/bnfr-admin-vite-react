// src\example\ButtonDefault\ButtonDefault.tsx

import type { FC } from 'react'
import cl from './ButtonDefault.module.scss'

interface ButtonDefaultProps {
  addClass?: string
  children?: React.ReactNode
}

const ButtonDefault: FC<ButtonDefaultProps> = ({ addClass, children }) => {
  
  return (
  <button className={`${cl.component} ${addClass}`}>{children}</button>
)
}

export default ButtonDefault