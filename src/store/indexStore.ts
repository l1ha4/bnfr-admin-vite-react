import { configureStore } from '@reduxjs/toolkit'

import { combineReducers } from 'redux'
import { listDsBotsReducer } from './dsBots/listDsBots/listDsBots.slice'
import { listServersDsBotReducer } from './dsBots/listServersDsBot/listServersDsBot.slice'
import { selectedDsBotReducer } from './dsBots/selectedDsBot/selectedDsBot.slice'
import type { SelectedDsBotState } from './dsBots/selectedDsBot/selectedDsBot.slice'
import { listChannelsServerDsBotReducer } from './dsBots/listChannelsServerDsBot/listChannelsServerDsBot.slice'

const SELECTED_BOT_STORAGE_KEY = 'bnfr:selectedDsBot'

export const rootReducer = combineReducers({
  dsBots: listDsBotsReducer,
  listServersDsBot: listServersDsBotReducer,
  selectedDsBot: selectedDsBotReducer,
  listChannelsServerDsBot: listChannelsServerDsBotReducer,
})

type RootReducerState = ReturnType<typeof rootReducer>

const loadSelectedDsBotState = ():
  | Pick<RootReducerState, 'selectedDsBot'>
  | undefined => {
  try {
    const rawState = localStorage.getItem(SELECTED_BOT_STORAGE_KEY)

    if (!rawState) {
      return undefined
    }

    const parsedState = JSON.parse(rawState) as SelectedDsBotState

    if (typeof parsedState?.selectedBotId !== 'string') {
      return undefined
    }

    return { selectedDsBot: parsedState }
  } catch {
    return undefined
  }
}

const saveSelectedDsBotState = (state: SelectedDsBotState) => {
  try {
    localStorage.setItem(SELECTED_BOT_STORAGE_KEY, JSON.stringify(state))
  } catch {
    // Ignore write errors (private mode/quota exceeded).
  }
}

export const setupStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: loadSelectedDsBotState(),
  })

  store.subscribe(() => {
    saveSelectedDsBotState(store.getState().selectedDsBot)
  })

  return store
}

export type AppStore = ReturnType<typeof setupStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
