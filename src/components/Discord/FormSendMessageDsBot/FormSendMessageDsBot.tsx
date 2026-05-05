// src\components\Discord\FormSendMessageDsBot\FormSendMessageDsBot.tsx

import { useState, type FC } from 'react'
import cl from './FormSendMessageDsBot.module.scss'
import StateTabs from '@/components/UI/Tabs/StateTabs';
import { routerTabs } from './tabs/routerTabs';

interface FormSendMessageDsBotProps {
  addClass?: string
}

const FormSendMessageDsBot: FC<FormSendMessageDsBotProps> = ({
  addClass,
}) => {
  const [activeTab, setActiveTab] = useState('listFormsMessage')
  return <div className={`${cl.component} ${addClass}`}>
    <StateTabs
      tabs={routerTabs}
      activeTab={activeTab}
      onTabChange={setActiveTab}
      defaultComponent="listFormsMessage"
    />
  </div>
}

export default FormSendMessageDsBot
