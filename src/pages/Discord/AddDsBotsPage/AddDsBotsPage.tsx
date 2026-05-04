// src\pages\DiscordBots\AddDsBotsPage\AddDsBotsPage.tsx

import { useState, type FC } from 'react'
import cl from './AddDsBotsPage.module.scss'
import FormNavigate from '@/components/UI/Navigate/FormNavigate/FormNavigate'
import { dsPages } from '@/config/dsBotsPages.config'
import InputDefault from '@/components/UI/InputDefault/InputDefault'
import ButtonDefault from '@/components/UI/ButtonDefault/ButtonDefault'
import { useNavigate } from 'react-router-dom'
import { botsApi } from '@/shared/api/dsBots.api'

const AddDsBotsPage: FC = () => {
  const navigate = useNavigate()
  const [token, setToken] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleAddBot = async () => {
    // Логика добавления бота
    // После успешного добавления, перенаправляем на страницу со списком ботов
    // navigate('/discord-bots')
    try {
      await botsApi.addBot(token)
      navigate('/discord-bots')
    } catch (error) {
      console.error('Не удалось добавить бота', error)
      setError('Не удалось добавить бота')
    }
  }

  return (
    <div className={`page ${cl.page}`}>
      <FormNavigate
        title={dsPages.addDsBot.title}
        subtitle={dsPages.addDsBot.subtitle}
      />
      <div className={cl.form}>
        <h3>Введите SecretTokenBots</h3>
        <InputDefault
          type="password"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
          {error && <p className={cl.error}>{error}</p>}
        <ButtonDefault addClass={cl.button} onClick={handleAddBot}>
          Добавить бота
        </ButtonDefault>
      </div>
    </div>
  )
}

export default AddDsBotsPage
