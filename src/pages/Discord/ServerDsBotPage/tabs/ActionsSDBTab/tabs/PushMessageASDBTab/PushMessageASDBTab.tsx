// src\pages\Discord\ServerDsBotPage\tabs\ActionsSDBTab\tabs\PushMessageASDBTab\PushMessageASDBTab.tsx

import type { FC } from 'react'
import cl from './PushMessageASDBTab.module.scss'
import FormSendMessageDsBot from '@/components/Discord/FormSendMessageDsBot/FormSendMessageDsBot';
import ListChannelsServerDsBot from '@/components/Discord/ListChannelsServerDsBot/ListChannelsServerDsBot';

const PushMessageASDBTab: FC = () => {
  return (
    <div className={cl.tab}>
      <h2>Отправка сообщения</h2>
      <div className={cl.content}>
        <ListChannelsServerDsBot />
        <div className={cl.previewMessage}></div>
        <FormSendMessageDsBot />
      </div>
    </div>
  )
}

export default PushMessageASDBTab
