// src/entities/bot/model/botsSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { botsApi } from '@/shared/api/dsBots.api'
import type { Servers } from '@/types/dsBots'
import type { RootState } from '@/store/indexStore'

interface ListServersDsBotState {
  id: string
  items: Servers[]
  isLoading: boolean
  error: string | null
}

const initialState: ListServersDsBotState = {
  id: '',
  items: [],
  isLoading: false,
  error: null,
}

export const fetchServers = createAsyncThunk<
  Servers[],
  void,
  { state: RootState }
>('servers/fetchServers', async (_, { getState }) => {
  const idBot = getState().selectedDsBot.selectedBotId
  return await botsApi.getBotsServers(idBot)
})

const listServersDsBotSlice = createSlice({
  name: 'listServersDsBot',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchServers.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchServers.fulfilled, (state, action) => {
        state.isLoading = false
        state.items = action.payload
      })
      .addCase(fetchServers.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message ?? 'Ошибка загрузки серверов'
      })
  },
})

export const listServersDsBotReducer = listServersDsBotSlice.reducer
