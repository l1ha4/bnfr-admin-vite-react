// src\example\ButtonTransparent\ButtonTransparent.tsx

import type { FC } from 'react'
import cl from './ButtonTransparent.module.scss'
import IconNext from './assets/next.svg'

interface ButtonTransparentProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  addClass?: string
  children?: React.ReactNode
  iconSvg: string | undefined
}

const ButtonTransparent: FC<ButtonTransparentProps> = ({
  addClass,
  children,
  iconSvg,
  ...props
}) => {
  return <button className={`${cl.component} ${addClass}`} {...props}>
    <span>{children}</span>
    <img src={iconSvg === 'next' ? IconNext : ''} alt='icon' />
    </button>
}

export default ButtonTransparent
