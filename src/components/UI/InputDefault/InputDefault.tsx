// src\example\InputDefault\InputDefault.tsx

import type { FC } from 'react'
import cl from './InputDefault.module.scss'

interface InputDefaultProps {
  addClass?: string
  placeholder: string
}

const InputDefault: FC<InputDefaultProps> = ({ placeholder, addClass }) => {
  return (
    <input
      className={`${cl.component} ${addClass}`}
      placeholder={placeholder}
    />
  )
}

export default InputDefault
