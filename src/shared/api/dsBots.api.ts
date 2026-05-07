// src/shared/api/botsApi.ts
import type {
  Bot,
  IEmbedContent,
  IFormMessageItem,
  PushMessageBody,
  SendFormMessageBody,
  ServerChannel,
  Servers,
} from '@/types/dsBots'

const API_URL = import.meta.env.VITE_API_URL

const hexColorToDecimal = (color?: string): number | undefined => {
  if (!color) return undefined
  const normalized = color.trim().replace('#', '')
  if (!/^[0-9a-fA-F]{6}$/.test(normalized)) return undefined

  return Number.parseInt(normalized, 16)
}

const buildEmbedDtoFromUiContent = (content: IEmbedContent) => {
  const title = content.title?.trim()
  const description = content.text?.trim()
  const color = hexColorToDecimal(content.colorLinear)
  const image = content.urlImageBottom?.trim()
  const thumbnail = content.urlImageSide?.trim()

  const embed = {
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
    ...(color !== undefined ? { color } : {}),
    ...(image ? { image } : {}),
    ...(thumbnail ? { thumbnail } : {}),
  }

  return Object.keys(embed).length > 0 ? embed : undefined
}

const normalizeFormMessageItems = (items: IFormMessageItem[]): unknown[] => {
  return items
    .map((item) => {
      if (item.type === 'text') {
        const content =
          typeof item.content === 'string' ? item.content.trim() : ''
        if (!content) return null

        return {
          name: item.name,
          type: 'text' as const,
          content,
        }
      }

      if (!item.content || typeof item.content === 'string') {
        return null
      }

      const embed = buildEmbedDtoFromUiContent(item.content)
      if (!embed) return null

      return {
        name: item.name,
        type: 'embed' as const,
        content: embed,
      }
    })
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
}

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

  async sendFormMessageDsBot(body: SendFormMessageBody): Promise<void> {
    const listItemsFormMessage = normalizeFormMessageItems(
      body.listItemsFormMessage,
    )

    if (!listItemsFormMessage.length) {
      throw new Error('Форма не содержит валидного текста или embed-блоков')
    }

    const response = await fetch(`${API_URL}/ds-bots/send-message`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        ...body,
        listItemsFormMessage,
      }),
    })

    if (!response.ok) {
      const serverMessage = await response.text().catch(() => '')
      throw new Error(
        `Не удалось отправить форму сообщения${serverMessage ? `: ${serverMessage}` : ''}`,
      )
    }
  },
}
