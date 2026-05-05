//

import type { FC } from 'react'
import cl from './FormEmbedFSMDBTab.module.scss'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import InputTransparent from '@/components/UI/Transparent/InputTransparent/InputTransparent'
import ButtonTransparent from '@/components/UI/Transparent/ButtonTransparent/ButtonTransparent';

interface FormEmbedFSMDBTabProps {
  onTabChange: (tab: string) => void
}

const FormEmbedFSMDBTab: FC<FormEmbedFSMDBTabProps> = ({ onTabChange }) => {
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
        <div>
          <InputTransparent />
        </div>
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

export default FormEmbedFSMDBTab
