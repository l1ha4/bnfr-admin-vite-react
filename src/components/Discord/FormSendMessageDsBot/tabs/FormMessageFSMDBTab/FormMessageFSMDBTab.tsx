// src\components\Discord\FormSendMessageDsBot\tabs\FormMessageFSMDBTab\FormMessageFSMDBTab.tsx

import { useState, type FC } from 'react'
import cl from './FormMessageFSMDBTab.module.scss'
import ButtonTransparent from '@/components/UI/Transparent/ButtonTransparent/ButtonTransparent'
import ItemTransparent from '@/components/UI/Transparent/ItemTransparent/ItemTransparent'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import {
  addItemFormMessage,
  setSelectedItemFormMessage,
} from '@/store/dsBots/StoreSendMessageDsBot/selectedSendMessageDsBot/selectedSendMessageDsBot.slice'
import { botsApi } from '@/shared/api/dsBots.api'

interface FormMessageFSMDBTabProps {
  onTabChange: (tab: string) => void
}

const FormMessageFSMDBTab: FC<FormMessageFSMDBTabProps> = ({ onTabChange }) => {
  const dispatch = useAppDispatch()
  const [isSending, setIsSending] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const { listItemsFormMessage, selectedFormMessageName } = useAppSelector(
    (state) => state.selectedSendMessageDsBot,
  )
  const { selectedBotId, selectedServerId, selectedChannelId } = useAppSelector(
    (state) => state.selectedDsBot,
  )

  const handleAddText = () => {
    dispatch(addItemFormMessage({ type: 'text' }))
  }

  const handleAddEmbed = () => {
    dispatch(addItemFormMessage({ type: 'embed' }))
  }

  const handleSendMessage = async () => {
    if (
      !selectedBotId ||
      !selectedServerId ||
      !selectedChannelId ||
      !listItemsFormMessage?.length
    )
      return
    try {
      setIsSending(true)
      setErrorMessage('')
      await botsApi.sendFormMessageDsBot({
        botId: selectedBotId,
        serverId: selectedServerId,
        channelId: selectedChannelId,
        listItemsFormMessage: listItemsFormMessage,
      })
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Не удалось отправить форму сообщения',
      )
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className={cl.tab}>
      <div className={cl.header}>
        <h2>{selectedFormMessageName}</h2>
        {/* <ButtonTransparent
          iconSvg="plus"
          onClick={() => onTabChange('listTemplates')}
        >
          добавить шаблон
        </ButtonTransparent> */}
      </div>
      <div className={cl.content}>
        <div className={cl.container_buttons}>
          <ButtonTransparent onClick={handleAddText} iconSvg="plus">
            добавить текст
          </ButtonTransparent>
          <ButtonTransparent onClick={handleAddEmbed} iconSvg="plus">
            добавить блок
          </ButtonTransparent>
        </div>
        <div className={cl.container_items}>
          {listItemsFormMessage && listItemsFormMessage.length === 0 ? (
            <p>Добавьте пункты...</p>
          ) : null}
          {listItemsFormMessage && listItemsFormMessage.length > 0
            ? listItemsFormMessage?.map((item, index) => (
                <ItemTransparent
                  key={index}
                  addClass={cl.item}
                  onClick={() => {
                    dispatch(setSelectedItemFormMessage(index))
                    onTabChange(
                      `${item.type === 'text' ? 'formMessageText' : 'formMessageEmbed'}`,
                    )
                  }}
                >
                  {item.type === 'text'
                    ? item.name || `Текст ${index + 1}`
                    : item.name || `Блок ${index + 1}`}
                </ItemTransparent>
              ))
            : ''}
        </div>
      </div>
      {errorMessage ? <p className={cl.error}>{errorMessage}</p> : null}
      <div className={cl.footer}>
        <ButtonTransparent
          iconSvg="back"
          onClick={() => onTabChange('listFormsMessage')}
        >
          Вернуться назад
        </ButtonTransparent>
        <ButtonTransparent
          styleColor="purple"
          iconSvg="push"
          onClick={handleSendMessage}
          disabled={isSending}
        >
          {isSending ? 'Отправка...' : 'Отправить сообщение'}
        </ButtonTransparent>
      </div>
    </div>
  )
}

export default FormMessageFSMDBTab
