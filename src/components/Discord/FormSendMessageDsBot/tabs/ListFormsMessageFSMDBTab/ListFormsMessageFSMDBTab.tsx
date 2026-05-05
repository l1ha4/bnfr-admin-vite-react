// src\components\Discord\FormSendMessageDsBot\tabs\ListFormsMessageFSMDBTab\ListFormsMessageFSMDBTab.tsx

import { type FC } from 'react'
import cl from './ListFormsMessageFSMDBTab.module.scss'
import ButtonTransparent from '@/components/UI/Transparent/ButtonTransparent/ButtonTransparent'

interface ListFormsMessageFSMDBTabProps {
  onTabChange: (tab: string) => void
}

interface IFormMessage {
  id: string
  name: string
}

const ListFormsMessageFSMDBTab: FC<ListFormsMessageFSMDBTabProps> = ({
  onTabChange,
}) => {
  const arrList: IFormMessage[] = []
  return (
    <div className={cl.tab}>
      <div className={cl.header}>
        <h2>Формы сообщений</h2>
        <ButtonTransparent iconSvg="plus" onClick={() => onTabChange('formMessage')}>
          создать новую форму
        </ButtonTransparent>
      </div>
      <div className={cl.list}>
        {arrList.length === 0 && <p>Пока нет форм сообщений...</p>}
        {arrList.map((item) => (
          <ButtonTransparent key={item.id} addClass={cl.item_list}>
            {item.name}
          </ButtonTransparent>
        ))}
      </div>
    </div>
  )
}

export default ListFormsMessageFSMDBTab
