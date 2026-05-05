import { listChannelsServerDsBotReducer } from './listChannelsServerDsBot/listChannelsServerDsBot.slice'
import { listDsBotsReducer } from './listDsBots/listDsBots.slice'
import { listServersDsBotReducer } from './listServersDsBot/listServersDsBot.slice'
import { selectedDsBotReducer } from './selectedDsBot/selectedDsBot.slice'
import { selectedSendMessageDsBotReducer } from './StoreSendMessageDsBot/selectedSendMessageDsBot/selectedSendMessageDsBot.slice'

export const INDEX_STORE_DS = {
  dsBots: listDsBotsReducer,
  listServersDsBot: listServersDsBotReducer,
  selectedDsBot: selectedDsBotReducer,
  listChannelsServerDsBot: listChannelsServerDsBotReducer,
  selectedSendMessageDsBot: selectedSendMessageDsBotReducer,
}
