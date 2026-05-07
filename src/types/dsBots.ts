// src\types\dsBots.ts

export interface Bot {
  id: string
  name: string
  status: 'online' | 'offline'
  avatarUrl: string | null
}

export interface Servers {
  id: string
  name: string
  icon: string | null
}

export interface ServerChannel {
  id: string
  name: string
}

export interface PushMessageBody {
  botId: string
  serverId: string
  channelId: string
  message: string
}

export interface IEmbedContent {
  title?: string
  text?: string
  colorLinear?: string
  urlImageSide?: string
  urlImageBottom?: string
}

export interface IFormMessageItem {
  name: string
  type: 'text' | 'embed'
  content: string | IEmbedContent
}

export interface SendFormMessageBody {
  botId: string
  serverId: string
  channelId: string
  listItemsFormMessage: IFormMessageItem[]
}
