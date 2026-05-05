// src\store\dsBots\StoreSendMessageDsBot\selectedSendMessageDsBot\selectedSendMessageDsBot.slice.ts

import type { IEmbedContent } from '@/types/dsBots'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface selectedSendMessageDsBotState {
  selectedFormMessage?: string
  selectedFormMessageName?: string
  listItemsFormMessage?: {
    name: string
    type: 'text' | 'embed'
    content: IEmbedContent | string
  }[]
  selectedItemFormMessage?: number
}

export type { selectedSendMessageDsBotState }

const initialState: selectedSendMessageDsBotState = {
  selectedFormMessage: '',
  listItemsFormMessage: [],
}

const selectedSendMessageDsBotSlice = createSlice({
  name: 'selectedSendMessageDsBot',
  initialState,
  reducers: {
    setSelectedFormMessage(
      state,
      action: PayloadAction<{ formMessage: string; formMessageName: string }>,
    ) {
      state.selectedFormMessage = action.payload.formMessage
      state.selectedFormMessageName = action.payload.formMessageName
    },
    createFormMessage(state) {
      state.selectedFormMessage = 'NEW_FORM_MESSAGE'
      state.selectedFormMessageName = 'Новая форма сообщения'
    },
    addItemFormMessage(
      state,
      action: PayloadAction<{ type: 'text' | 'embed' }>,
    ) {
      state.listItemsFormMessage = [
        ...(state.listItemsFormMessage || []),
        {
          name: `${state.listItemsFormMessage?.length ? state.listItemsFormMessage.length + 1 : 1}. ${action.payload.type === 'text' ? 'Текст' : 'Встроенное сообщение'} `,
          type: action.payload.type,
          content: '',
        },
      ]
    },
    setSelectedItemFormMessage(state, action: PayloadAction<number>) {
      state.selectedItemFormMessage = action.payload
    },
    setContentItemFormMessage(
      state,
      action: PayloadAction<{ index: number; content: string | IEmbedContent }>,
    ) {
      if (
        state.listItemsFormMessage &&
        state.listItemsFormMessage[action.payload.index]
      ) {
        state.listItemsFormMessage[action.payload.index].content =
          action.payload.content
      }
    },
  },
})

export const {
  setSelectedFormMessage,
  createFormMessage,
  addItemFormMessage,
  setSelectedItemFormMessage,
  setContentItemFormMessage,
} = selectedSendMessageDsBotSlice.actions
export const selectedSendMessageDsBotReducer =
  selectedSendMessageDsBotSlice.reducer
