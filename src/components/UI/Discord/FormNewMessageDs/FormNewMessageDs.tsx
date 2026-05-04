// src\components\UI\Discord\FormNewMessageDs\FormNewMessageDs.tsx

import type { FC } from 'react'
import cl from './FormNewMessageDs.module.scss'

interface FormNewMessageDsProps {
  addClass?: string
}

const FormNewMessageDs: FC<FormNewMessageDsProps> = ({
  addClass,
}) => {
  return <div className={`${cl.component} ${addClass}`}>
    
  </div>
}

export default FormNewMessageDs
