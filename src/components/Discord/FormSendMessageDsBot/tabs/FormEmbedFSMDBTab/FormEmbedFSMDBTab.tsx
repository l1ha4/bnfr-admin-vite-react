//

import { useState, type FC } from 'react'
import cl from './FormEmbedFSMDBTab.module.scss'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import InputTransparent from '@/components/UI/Transparent/InputTransparent/InputTransparent'
import ButtonTransparent from '@/components/UI/Transparent/ButtonTransparent/ButtonTransparent'
import TextAreaTransparent from '@/components/UI/Transparent/TextAreaTransparent/TextAreaTransparent'
import {
  deleteSelectedItemFormMessage,
  setContentItemFormMessage,
} from '@/store/dsBots/StoreSendMessageDsBot/selectedSendMessageDsBot/selectedSendMessageDsBot.slice'
import type { IEmbedContent } from '@/types/dsBots'

interface FormEmbedFSMDBTabProps {
  onTabChange: (tab: string) => void
}

const isEmbedContent = (
  content: string | IEmbedContent,
): content is IEmbedContent => typeof content === 'object' && content !== null

const FormEmbedFSMDBTab: FC<FormEmbedFSMDBTabProps> = ({ onTabChange }) => {
  const dispatch = useAppDispatch()
  const {
    selectedFormMessageName,
    listItemsFormMessage,
    selectedItemFormMessage,
  } = useAppSelector((state) => state.selectedSendMessageDsBot)

  const selectedItemContent =
    listItemsFormMessage && selectedItemFormMessage !== undefined
      ? listItemsFormMessage[selectedItemFormMessage]?.content
      : undefined

  const selectedEmbedContent =
    selectedItemContent && isEmbedContent(selectedItemContent)
      ? selectedItemContent
      : undefined

  const [formContent, setFormContent] = useState<IEmbedContent>({
    title: selectedEmbedContent?.title || '',
    text: selectedEmbedContent?.text || '',
    colorLinear: selectedEmbedContent?.colorLinear || '',
    urlImageSide: selectedEmbedContent?.urlImageSide || '',
    urlImageBottom: selectedEmbedContent?.urlImageBottom || '',
  })
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
        <div className={cl.inputs}>
          <div className={cl.inputGroup}>
            <h4>Заголовок</h4>
            <InputTransparent
              value={formContent.title}
              onChange={(e) => {
                setFormContent((prev) => ({ ...prev, title: e.target.value }))
                dispatch(
                  setContentItemFormMessage({
                    content: { ...formContent, title: e.target.value },
                  }),
                )
              }}
              addClass={cl.input}
            />
          </div>

          <div className={cl.inputGroup}>
            <h4>Текст</h4>
            <TextAreaTransparent
              value={formContent.text}
              onChange={(e) => {
                setFormContent({ ...formContent, text: e.target.value })
                dispatch(
                  setContentItemFormMessage({
                    content: { ...formContent, text: e.target.value },
                  }),
                )
              }}
              addClass={cl.input}
            />
          </div>

          <div className={cl.inputGroup}>
            <h4>Цвет боковой линии</h4>
            <input
              type="color"
              value={formContent.colorLinear}
              onChange={(e) => {
                setFormContent({ ...formContent, colorLinear: e.target.value })
                dispatch(
                  setContentItemFormMessage({
                    content: { ...formContent, colorLinear: e.target.value },
                  }),
                )
              }}
              className={cl.selectedColor}
            />
          </div>

          <div className={cl.inputGroup}>
            <h4>Url боковой картинки: </h4>
            <InputTransparent
              value={formContent.urlImageSide}
              onChange={(e) => {
                setFormContent({ ...formContent, urlImageSide: e.target.value })
                dispatch(
                  setContentItemFormMessage({
                    content: { ...formContent, urlImageSide: e.target.value },
                  }),
                )
              }}
              addClass={cl.input}
            />
          </div>

          <div className={cl.inputGroup}>
            <h4>Url нижней картинки: </h4>
            <InputTransparent
              value={formContent.urlImageBottom}
              onChange={(e) => {
                setFormContent({
                  ...formContent,
                  urlImageBottom: e.target.value,
                })
                dispatch(
                  setContentItemFormMessage({
                    content: { ...formContent, urlImageBottom: e.target.value },
                  }),
                )
              }}
              addClass={cl.input}
            />
          </div>
        </div>
      </div>
      <div className={cl.footer}>
        <ButtonTransparent
          iconSvg="back"
          onClick={() => onTabChange('formMessage')}
        >
          Вернуться назад
        </ButtonTransparent>
        <ButtonTransparent
          iconSvg="delete"
          styleColor="red"
          onClick={() => {
            dispatch(deleteSelectedItemFormMessage())
            onTabChange('formMessage')
          }}
        >
          удалить блок
        </ButtonTransparent>
      </div>
    </div>
  )
}

export default FormEmbedFSMDBTab
