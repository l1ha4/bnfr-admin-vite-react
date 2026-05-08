// src\pages\BonfireID\BonfireIDPage\tabs\SettingsBITab\SettingsBITab.tsx

import { useState, type FC } from 'react'
import cl from './SettingsBITab.module.scss'
import BlockTransparent from '@/components/UI/Transparent/BlockTransparent/BlockTransparent'
import ButtonSwitchTransparent from '@/components/UI/Transparent/ButtonSwitchTransparent/ButtonSwitchTransparent'

const SettingsBITab: FC = () => {
  const [stateButton, setStateButton] = useState(false)
  return (
    <div className={cl.tab}>
      <BlockTransparent>
        <span>Открытая регистрация на сервере </span>{' '}
        <ButtonSwitchTransparent
          stateButton={stateButton}
          setStateButton={setStateButton}
        />
      </BlockTransparent>
    </div>
  )
}

export default SettingsBITab
