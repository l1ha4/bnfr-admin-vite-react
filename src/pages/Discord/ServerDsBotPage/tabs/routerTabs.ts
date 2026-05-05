import type { IRouterTabTypes } from '@/components/UI/Tabs/types/default'
import FunctionsSDBTab from '@/pages/Discord/ServerDsBotPage/tabs/FunctionsSDBTab/FunctionsSDBTab'
import ActionsSDBTab from './ActionsSDBTab/ActionsSDBTab'
import MembersSDBTab from './MembersSDBTab/MembersSDBTab'

export const routerTabs: IRouterTabTypes = [
  ['functions', FunctionsSDBTab],
  ['actions', ActionsSDBTab],
  ['members', MembersSDBTab],
]
