// src\components\UI\Navigate\ButtonBackNavigate\ButtonBackNavigate.tsx

import React from 'react'
import type { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { goBack } from '@/utils/navigation'
import cl from './ButtonBackNavigate.module.scss'
import backSvg from './assets/left.svg'

interface ButtonBackNavigateProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  addClass?: string
  children?: React.ReactNode
  returnPath?: string
}

const ButtonBackNavigate: FC<ButtonBackNavigateProps> = ({
  addClass,
  children,
  onClick,
  returnPath,
  ...props
}) => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <button
      className={`${cl.component} ${addClass}`}
      {...props}
      onClick={goBack(navigate, onClick, returnPath, location.pathname)}
    >
      <img src={backSvg} alt="backSvg" />
      <span>{children}</span>
    </button>
  )
}

export default ButtonBackNavigate
