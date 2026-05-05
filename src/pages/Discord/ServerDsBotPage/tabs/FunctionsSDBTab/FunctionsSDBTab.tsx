// src\pages\Discord\ServerDsBotPage\tabs\FunctionsSDBTab\FunctionsSDBTab.tsx

import type { FC } from 'react'
import cl from './FunctionsSDBTab.module.scss'
import ButtonTransparent from '@/components/UI/Transparent/ButtonTransparent/ButtonTransparent'
import Section from '@/components/UI/Section/Section'

const FunctionsSDBTab: FC = () => {
  return (
    <div className={cl.tab}>
      <div className={cl.titleBlockTab}>
        <h2>Активные функции</h2>
        <ButtonTransparent iconSvg="plus">добавить функцию</ButtonTransparent>
      </div>
      <div className={cl.functionsList}>
        <Section title="Создание персональных голосовых каналов" status="dev" />
        <Section title="Выдачи ролей новым участникам" status="dev" />
      </div>
    </div>
  )
}

export default FunctionsSDBTab
