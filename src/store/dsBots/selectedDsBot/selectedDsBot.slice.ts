// src/entities/bot/model/botsSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface SelectedDsBotState {
  selectedBotName?: string
  selectedBotId: string
  selectedServerId?: string
  selectedServerName?: string
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
      action: PayloadAction<{ id: string; name: string }>,
    ) {
      state.selectedBotId = action.payload.id
      state.selectedBotName = action.payload.name
    },
    setSelectedServerId(state, action: PayloadAction<{id: string, name: string}>) {
      state.selectedServerId = action.payload.id
      state.selectedServerName = action.payload.name
    },
    setSelectedChannelId(state, action: PayloadAction<string>) {
      state.selectedChannelId = action.payload
    },
  },
})

export const { setSelectedBotId, setSelectedServerId, setSelectedChannelId } =
  selectedDsBotSlice.actions
export const selectedDsBotReducer = selectedDsBotSlice.reducer
