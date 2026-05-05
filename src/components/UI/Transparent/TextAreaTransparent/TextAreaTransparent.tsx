// src\example\TextAreaTransparent\TextAreaTransparent.tsx

import type { FC } from 'react'
import cl from './TextAreaTransparent.module.scss'

interface TextAreaTransparentProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  addClass?: string
}

const TextAreaTransparent: FC<TextAreaTransparentProps> = ({
  addClass,
  ...props
}) => {
  return (
    <textarea className={`${cl.component} ${addClass}`} {...props}></textarea>
  )
}

export default TextAreaTransparent
