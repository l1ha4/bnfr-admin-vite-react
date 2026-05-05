import type { IRouterTabTypes } from '@/components/UI/Tabs/types/default'
import ListFormsMessageFSMDBTab from './ListFormsMessageFSMDBTab/ListFormsMessageFSMDBTab';
import FormMessageFSMDBTab from './FormMessageFSMDBTab/FormMessageFSMDBTab';


export const routerTabs: IRouterTabTypes = [
  ['listFormsMessage', ListFormsMessageFSMDBTab],
  ['formMessage', FormMessageFSMDBTab]
]