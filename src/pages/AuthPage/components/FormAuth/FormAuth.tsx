// src\pages\AuthPage\components\FormAuth\FormAuth.tsx

import { useState, type FC } from 'react'
import cl from './FormAuth.module.scss'
import InputDefault from '@/components/UI/InputDefault/InputDefault'
import ButtonDefault from '@/components/UI/ButtonDefault/ButtonDefault'
import { useAuth } from '@/context/AuthContext'


const FormAuth: FC = () => {
  const { login } = useAuth()


  const [loginInput, setLogin] = useState('')
  const [passwordInput, setPassword] = useState('')

  const handleLogin = async () => {
    await login({ email: loginInput, password: passwordInput })
  }
  return (
    <div className={cl.component}>
      <h1>Авторизация</h1>
      <div className={cl.block_inputs}>
        <InputDefault placeholder="Введите логин" value={loginInput} onChange={(e) => setLogin(e.target.value)} />
        <InputDefault placeholder="Введите пароль" type="password" value={passwordInput} onChange={(e) => setPassword(e.target.value)} />
        
      </div>
      <ButtonDefault addClass={cl.button_in} onClick={handleLogin}>Войти</ButtonDefault>
    </div>
  )
}

export default FormAuth
