// src\pages\Discord\ServerDsBotPage\tabs\ActionsSDBTab\tabs\PushMessageASDBTab\PushMessageASDBTab.tsx

import type { FC } from 'react'
import cl from './PushMessageASDBTab.module.scss'
import FormSendMessageDsBot from '@/components/Discord/FormSendMessageDsBot/FormSendMessageDsBot'
import ListChannelsServerDsBot from '@/components/Discord/ListChannelsServerDsBot/ListChannelsServerDsBot'
import MessageDs from '@/components/UI/Discord/MessageDs/MessageDs'
import { useAppSelector } from '@/hooks/redux'

const PushMessageASDBTab: FC = () => {
  const { selectedBotName, selectedBotAvatarUrl } = useAppSelector((state) => state.selectedDsBot)
  const { listItemsFormMessage } = useAppSelector(
    (state) => state.selectedSendMessageDsBot,
  )
  return (
    <div className={cl.tab}>
      <h2>Отправка сообщения</h2>
      <div className={cl.content}>
        <ListChannelsServerDsBot />
        <div className={cl.previewMessage}>
          <MessageDs username={selectedBotName} content={listItemsFormMessage} avatarUrl={selectedBotAvatarUrl} />
        </div>
        <FormSendMessageDsBot />
      </div>
    </div>
  )
}

export default PushMessageASDBTab
