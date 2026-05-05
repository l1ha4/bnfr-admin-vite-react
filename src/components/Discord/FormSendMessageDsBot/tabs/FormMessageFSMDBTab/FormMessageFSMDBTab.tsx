// src\components\Discord\FormSendMessageDsBot\tabs\FormMessageFSMDBTab\FormMessageFSMDBTab.tsx

import type { FC } from 'react'
import cl from './FormMessageFSMDBTab.module.scss'
import ButtonTransparent from '@/components/UI/Transparent/ButtonTransparent/ButtonTransparent'
import ItemTransparent from '@/components/UI/Transparent/ItemTransparent/ItemTransparent';

interface FormMessageFSMDBTabProps {
  onTabChange: (tab: string) => void
}

const FormMessageFSMDBTab: FC<FormMessageFSMDBTabProps> = ({ onTabChange }) => {
  return (
    <div className={cl.tab}>
      <div className={cl.header}>
        <h2>Новое сообщение</h2>
        <ButtonTransparent
          iconSvg="plus"
          onClick={() => onTabChange('listTemplates')}
        >
          добавить шаблон
        </ButtonTransparent>
      </div>
      <div className={cl.content}>
        <div className={cl.container_buttons}>
          <ButtonTransparent iconSvg="plus">добавить текст</ButtonTransparent>
          <ButtonTransparent iconSvg="plus">добавить блок</ButtonTransparent>
        </div>
        <div className={cl.container_items}>
          <ItemTransparent addClass={cl.item}>1. Абзац текста: Привет</ItemTransparent>
        </div>
      </div>
      <div className={cl.footer}>
        <ButtonTransparent
          iconSvg="back"
          onClick={() => onTabChange('listFormsMessage')}
        >
          Вернуться назад
        </ButtonTransparent>
      </div>
    </div>
  )
}

export default FormMessageFSMDBTab
