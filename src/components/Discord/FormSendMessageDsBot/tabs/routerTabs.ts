import type { IStateTabTypes } from '@/components/UI/Tabs/types/state'
import ListFormsMessageFSMDBTab from './ListFormsMessageFSMDBTab/ListFormsMessageFSMDBTab'
import FormMessageFSMDBTab from './FormMessageFSMDBTab/FormMessageFSMDBTab'
import FormTextFSMDBTab from './FormTextFSMDBTab/FormTextFSMDBTab'
import FormEmbedFSMDBTab from './FormEmbedFSMDBTab/FormEmbedFSMDBTab'

export const routerTabs: IStateTabTypes = [
  ['listFormsMessage', ListFormsMessageFSMDBTab],
  ['formMessage', FormMessageFSMDBTab],
  ['formMessageText', FormTextFSMDBTab],
  ['formMessageEmbed', FormEmbedFSMDBTab],
]
