// src\example\InputTransparent\InputTransparent.tsx

import type { FC } from 'react'
import cl from './InputTransparent.module.scss'

interface InputTransparentProps extends React.InputHTMLAttributes<HTMLInputElement> {
  addClass?: string
}

const InputTransparent: FC<InputTransparentProps> = ({
  addClass,
  ...props
}) => {
  return <input className={`${cl.component} ${addClass}`} {...props} />
}

export default InputTransparent
