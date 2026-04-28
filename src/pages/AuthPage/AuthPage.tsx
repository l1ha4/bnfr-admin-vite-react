// src\pages\AuthPage\AuthPage.tsx

import type { FC } from 'react'
import cl from './AuthPage.module.scss'
import FormAuth from './components/FormAuth/FormAuth'

const AuthPage: FC = () => {
  return (
    <div className={`page ${cl.page}`}>
      <FormAuth />
    </div>
  )
}

export default AuthPage
