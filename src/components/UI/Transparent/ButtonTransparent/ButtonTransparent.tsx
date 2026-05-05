// src\example\ButtonTransparent\ButtonTransparent.tsx

import type { FC } from 'react'
import cl from './ButtonTransparent.module.scss'
import IconNext from './assets/next.svg'
import IconPlus from './assets/plus.svg'
import IconBack from './assets/back.svg'

interface ButtonTransparentProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  addClass?: string
  children?: React.ReactNode
  iconSvg?: 'next' | 'plus' | 'back'
}

const ButtonTransparent: FC<ButtonTransparentProps> = ({
  addClass,
  children,
  iconSvg,
  ...props
}) => {
  return (
    <button className={`${cl.component} ${addClass}`} {...props}>
      {iconSvg === 'back' && <img className={cl.icon} src={IconBack} alt="icon" />}
      {iconSvg === 'plus' && <img className={cl.icon} src={IconPlus} alt="icon" />}
      <span>{children}</span>
      {iconSvg === 'next' && <img className={cl.icon} src={IconNext} alt="icon" />}
    </button>
  )
}

export default ButtonTransparent
