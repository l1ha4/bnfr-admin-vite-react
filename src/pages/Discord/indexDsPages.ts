import DsPage from "./DsPage/DsPage"
import ListDsBotsPage from "./ListDsBotsPage/ListDsBotsPage"
import AddDsBotsPage from "./AddDsBotsPage/AddDsBotsPage"
import DsBotPage from "./DsBotPage/DsBotPage"
import ServerDsBotPage from "./ServerDsBotPage/ServerDsBotPage"
import PushMessageDsBotPage from "./PushMessageDsBotPage/PushMessageDsBotPage"
import ListServersDsBotPage from "./ListServersDsBotPage/ListServersDsBotPage"

export const DS_PAGES = [
	{path: 'discord', element: DsPage},
  {path: 'discord/bots', element: ListDsBotsPage},
  {path: 'discord/bots/add', element: AddDsBotsPage},
  {path: 'discord/bots/bot', element: DsBotPage},
  {path: 'discord/bots/bot/servers', element: ListServersDsBotPage},
  {path: 'discord/bots/bot/servers/server-action', element: ServerDsBotPage},
  {path: 'discord/bots/bot/servers/server-action/:tabs', element: ServerDsBotPage},
  {path: 'discord/bots/bot/servers/server-action/push-message', element: PushMessageDsBotPage}
]