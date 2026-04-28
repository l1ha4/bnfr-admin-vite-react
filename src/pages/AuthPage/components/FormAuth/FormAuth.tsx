// src\pages\AuthPage\components\FormAuth\FormAuth.tsx

import type { FC } from 'react'
import cl from './FormAuth.module.scss'
import InputDefault from '@/components/UI/InputDefault/InputDefault'
import ButtonDefault from '@/components/UI/ButtonDefault/ButtonDefault'

const FormAuth: FC = () => {
  return (
    <div className={cl.component}>
      <h1>Авторизация</h1>
      <div className={cl.block_inputs}>
        <InputDefault placeholder="Введите логин" />
        <InputDefault placeholder="Введите пароль" />
      </div>
      <ButtonDefault addClass={cl.button_in}>Войти</ButtonDefault>
    </div>
  )
}

export default FormAuth
