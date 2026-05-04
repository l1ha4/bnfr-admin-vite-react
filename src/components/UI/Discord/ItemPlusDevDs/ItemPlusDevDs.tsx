import type { FC } from 'react'
import cl from './ItemPlusDevDs.module.scss'

interface ItemPlusDevDsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  addClass?: string
  title?: string
}

const ItemPlusDevDs: FC<ItemPlusDevDsProps> = ({
  addClass,
  title = 'Добавить бота',
  ...props
}) => {
  return (
    <button className={`${cl.component} ${addClass}`} {...props}>
      <div className={cl.avatar}>
        <span className={cl.plus}>+</span>
      </div>
      <span>{title}</span>
    </button>
  )
}

export default ItemPlusDevDs
