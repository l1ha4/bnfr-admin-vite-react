// src/entities/bot/model/botsSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { botsApi } from '@/shared/api/dsBots.api'
import type { Bot } from '@/types/dsBots'

interface ListDsBotsState {
  items: Bot[]
  isLoading: boolean
  error: string | null
}

const initialState: ListDsBotsState = {
  items: [],
  isLoading: false,
  error: null,
}

export const fetchBots = createAsyncThunk<Bot[]>(
  'bots/fetchBots',
  async () => {
    return await botsApi.getBots()
  },
)

const listDsBotsSlice = createSlice({
  name: 'listDsBots',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchBots.pending, state => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchBots.fulfilled, (state, action) => {
        state.isLoading = false
        state.items = action.payload
      })
      .addCase(fetchBots.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message ?? 'Ошибка загрузки ботов'
      })
  },
})

export const listDsBotsReducer = listDsBotsSlice.reducer