// src\components\UI\Section\Section.tsx

import type { FC } from 'react'
import cl from './Section.module.scss'
import ButtonTransparent from '@/components/UI/Transparent/ButtonTransparent/ButtonTransparent'

interface SectionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  addClass?: string
  title: string
  status: 'active' | 'dev'
  children?: React.ReactNode
  textButton?: string
  onClick?: () => void
}

const Section: FC<SectionProps> = ({
  addClass,
  title,
  status,
  textButton,
  onClick,
}) => {
  return (
    <div className={`${cl.component} ${addClass}`}>
      <h3>{title}</h3>
      {status === 'active' ? (
        <ButtonTransparent iconSvg="next" onClick={onClick}>
          {textButton || 'Перейти'}
        </ButtonTransparent>
      ) : (
        <p>В разработке...</p>
      )}
    </div>
  )
}

export default Section
