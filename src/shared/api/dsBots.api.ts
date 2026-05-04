// src/shared/api/botsApi.ts
import type {
  Bot,
  PushMessageBody,
  ServerChannel,
  Servers,
} from '@/types/dsBots'

const API_URL = import.meta.env.VITE_API_URL

export const botsApi = {
  async getBots(): Promise<Bot[]> {
    const response = await fetch(`${API_URL}/ds-bots/all`, {
      credentials: 'include',
    })

    if (!response.ok) {
      throw new Error('Не удалось получить список ботов')
    }

    return response.json()
  },

  async getBotsServers(idBot: string): Promise<Servers[]> {
    const response = await fetch(`${API_URL}/ds-bot/servers/${idBot}`, {
      credentials: 'include',
    })

    if (!response.ok) {
      throw new Error('Не удалось получить список серверов ботов')
    }

    return response.json()
  },

  async addBot(token: string): Promise<Bot> {
    const response = await fetch(`${API_URL}/ds-bots/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ token }),
    })

    if (!response.ok) {
      throw new Error('Не удалось добавить бота')
    }

    return response.json()
  },

  async getChannelsServersDsBot(
    idBot: string,
    idServer: string | undefined,
  ): Promise<ServerChannel[]> {
    if (!idServer && !idBot) {
      throw new Error('ID сервера и ID бота не могут быть пустыми')
    }

    const response = await fetch(
      `${API_URL}/ds-bot/server-channels/${idBot}/${idServer}`,
      {
        credentials: 'include',
      },
    )

    if (!response.ok) {
      throw new Error('Не удалось получить список каналов серверов бота')
    }

    return response.json()
  },

  async pushMessageDsBot(body: PushMessageBody): Promise<void> {
    const response = await fetch(`${API_URL}/ds-bots/send-message`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      throw new Error('Не удалось отправить сообщение в канал')
    }
  },
}
