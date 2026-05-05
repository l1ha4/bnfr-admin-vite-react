// src/entities/bot/model/botsSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface SelectedDsBotState {
  selectedBotName?: string
  selectedBotId: string
  selectedBotAvatarUrl?: string | null
  selectedServerId?: string
  selectedServerName?: string
  selectedServerAvatarUrl?: string | null
  selectedChannelId?: string
}

export type { SelectedDsBotState }

const initialState: SelectedDsBotState = {
  selectedBotId: '',
}

const selectedDsBotSlice = createSlice({
  name: 'selectedDsBot',
  initialState,
  reducers: {
    setSelectedBotId(
      state,
      action: PayloadAction<{ id: string; name: string; avatarUrl: string | null }>,
    ) {
      state.selectedBotId = action.payload.id
      state.selectedBotName = action.payload.name
      state.selectedBotAvatarUrl = action.payload.avatarUrl
    },
    setSelectedServerId(state, action: PayloadAction<{id: string, name: string, avatarUrl: string | null}>) {
      state.selectedServerId = action.payload.id
      state.selectedServerName = action.payload.name
      state.selectedServerAvatarUrl = action.payload.avatarUrl
    },
    setSelectedChannelId(state, action: PayloadAction<string>) {
      state.selectedChannelId = action.payload
    },
  },
})

export const { setSelectedBotId, setSelectedServerId, setSelectedChannelId } =
  selectedDsBotSlice.actions
export const selectedDsBotReducer = selectedDsBotSlice.reducer
