// src\components\UI\Navigate\FormNavigate\FormNavigate.tsx

import type { FC } from 'react'
import cl from './FormNavigate.module.scss'
import ButtonBackNavigate from '../ButtonBackNavigate/ButtonBackNavigate'

interface FormNavigateProps {
  addClass?: string
  title: string
  subtitle?: string
}

const FormNavigate: FC<FormNavigateProps> = ({
  addClass,
  title,
  subtitle,
}) => {
  return <div className={`${cl.component} ${addClass}`}>
    <ButtonBackNavigate >вернуться назад</ButtonBackNavigate>
    <h1>{title}</h1>
    {subtitle && <h2>{subtitle}</h2>}
  </div>
}

export default FormNavigate
