// src\example\ButtonDefault\ButtonDefault.tsx

import type { FC, ReactNode } from 'react'
import cl from './ButtonDefault.module.scss'

interface ButtonDefaultProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  addClass?: string
  children?: ReactNode
}

const ButtonDefault: FC<ButtonDefaultProps> = ({
  addClass,
  children,
  ...props
}) => {
  return (
    <button className={`${cl.component} ${addClass}`} {...props}>
      {children}
    </button>
  )
}

export default ButtonDefault
