// src/entities/bot/model/botsSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { botsApi } from '@/shared/api/dsBots.api'
import type { ServerChannel } from '@/types/dsBots'
import type { RootState } from '@/store/indexStore'

interface ListChannelsServerDsBotState {
  id: string
  items: ServerChannel[]
  isLoading: boolean
  error: string | null
}

const initialState: ListChannelsServerDsBotState = {
  id: '',
  items: [],
  isLoading: false,
  error: null,
}

export const fetchChannelsServers = createAsyncThunk<
  ServerChannel[],
  void,
  { state: RootState }
>('channelsServers/fetchChannelsServers', async (_, { getState }) => {
  const idBot = getState().selectedDsBot.selectedBotId
  const idServer = getState().selectedDsBot.selectedServerId
  return await botsApi.getChannelsServersDsBot(idBot, idServer)
})

const listChannelsServerDsBotSlice = createSlice({
  name: 'listChannelsServerDsBot',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchChannelsServers.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchChannelsServers.fulfilled, (state, action) => {
        state.isLoading = false
        console.log('Загруженные каналы серверов:', action.payload)
        state.items = action.payload
      })
      .addCase(fetchChannelsServers.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message ?? 'Ошибка загрузки каналов серверов'
      })
  },
})

export const listChannelsServerDsBotReducer = listChannelsServerDsBotSlice.reducer
