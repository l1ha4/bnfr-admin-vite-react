// src\components\UI\InputDefault\InputDefault.tsx

import type { FC, InputHTMLAttributes } from 'react'
import cl from './InputDefault.module.scss'

type InputDefaultProps = InputHTMLAttributes<HTMLInputElement> & {
  addClass?: string
}

const InputDefault: FC<InputDefaultProps> = ({ addClass, ...props }) => {
  return <input className={`${cl.component} ${addClass}`} {...props} />
}

export default InputDefault
