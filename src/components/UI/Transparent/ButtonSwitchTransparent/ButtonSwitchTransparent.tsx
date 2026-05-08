// src\components\UI\Transparent\ButtonSwitchTransparent\ButtonSwitchTransparent.tsx

import { type FC } from 'react'
import cl from './ButtonSwitchTransparent.module.scss'

interface ButtonSwitchTransparentProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  addClass?: string
  stateButton?: boolean
  setStateButton?: (state: boolean) => void
}

const ButtonSwitchTransparent: FC<ButtonSwitchTransparentProps> = ({
  addClass,
  stateButton,
  setStateButton,
  ...props
}) => {
  return (
    <button
      className={`${cl.component} ${addClass} `}
      {...props}
      aria-pressed={stateButton}
      onClick={() => {
        setStateButton?.(!stateButton)
      }}
    >
      <div
        className={`${cl.block} ${stateButton ? cl.enabled : cl.not_enabled}`}
      ></div>
    </button>
  )
}

export default ButtonSwitchTransparent
