// src\components\Discord\FormSendMessageDsBot\tabs\FormTextFSMDBTab\FormTextFSMDBTab.tsx

import type { FC } from 'react'
import cl from './FormTextFSMDBTab.module.scss'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import TextAreaTransparent from '@/components/UI/Transparent/TextAreaTransparent/TextAreaTransparent'
import { setContentItemFormMessage } from '@/store/dsBots/StoreSendMessageDsBot/selectedSendMessageDsBot/selectedSendMessageDsBot.slice'
import ButtonTransparent from '@/components/UI/Transparent/ButtonTransparent/ButtonTransparent'

interface FormTextFSMDBTabProps {
  onTabChange: (tab: string) => void
}

const FormTextFSMDBTab: FC<FormTextFSMDBTabProps> = ({ onTabChange }) => {
  const dispatch = useAppDispatch()
  const {
    selectedFormMessageName,
    listItemsFormMessage,
    selectedItemFormMessage,
  } = useAppSelector((state) => state.selectedSendMessageDsBot)

  return (
    <div className={cl.tab}>
      <div className={cl.header}>
        <h2>{selectedFormMessageName || 'Не нашли имя сообщения'}</h2>
      </div>
      <div className={cl.content}>
        <h3>
          {listItemsFormMessage && selectedItemFormMessage !== undefined
            ? listItemsFormMessage[selectedItemFormMessage].name
            : ''}
        </h3>
        <TextAreaTransparent
          addClass={cl.textArea}
          value={
            listItemsFormMessage && selectedItemFormMessage !== undefined
              ? (listItemsFormMessage[selectedItemFormMessage]
                  .content as string)
              : ''
          }
          onChange={(e) => {
            if (listItemsFormMessage && selectedItemFormMessage !== undefined) {
              dispatch(
                setContentItemFormMessage({
                  index: selectedItemFormMessage,
                  content: e.target.value,
                }),
              )
            }
          }}
          placeholder="Введите текст сообщения..."
        />
      </div>
      <div className={cl.footer}>
        <ButtonTransparent
          iconSvg="back"
          onClick={() => onTabChange('formMessage')}
        >
          Вернуться назад
        </ButtonTransparent>
      </div>
    </div>
  )
}

export default FormTextFSMDBTab
