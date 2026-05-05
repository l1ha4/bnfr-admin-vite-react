import type { IRouterTabTypes } from '@/components/UI/Tabs/types/default'
import ListFormsMessageFSMDBTab from './ListFormsMessageFSMDBTab/ListFormsMessageFSMDBTab';
import FormMessageFSMDBTab from './FormMessageFSMDBTab/FormMessageFSMDBTab';
import FormTextFSMDBTab from './FormTextFSMDBTab/FormTextFSMDBTab';
import FormEmbedFSMDBTab from './FormEmbedFSMDBTab/FormEmbedFSMDBTab';


export const routerTabs: IRouterTabTypes = [
  ['listFormsMessage', ListFormsMessageFSMDBTab],
  ['formMessage', FormMessageFSMDBTab],
  ['formMessageText', FormTextFSMDBTab],
  ['formMessageEmbed', FormEmbedFSMDBTab],
]