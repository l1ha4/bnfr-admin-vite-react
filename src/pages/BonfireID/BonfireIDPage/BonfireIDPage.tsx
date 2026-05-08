// src\pages\BonfireID\BonfireIDPage\BonfireIDPage.tsx

import type { FC } from 'react'
import cl from './BonfireIDPage.module.scss'
import FormNavigate from '@/components/UI/Navigate/FormNavigate/FormNavigate'
import TabNavigate from '@/components/UI/TabNavigate/TabNavigate'
import Tabs from '@/components/UI/Tabs/Tabs'
import { routerTabs } from './tabs/routerTabs'

const BonfireIDPage: FC = () => {
  const pathPage = '/bonfire-id'
  return (
    <div className={`page ${cl.page}`}>
      <FormNavigate title="Bonfire ID" />
      <div className={cl.tabNavigate}>
        <TabNavigate
          arrTabs={[{ label: 'Настройки', path: `${pathPage}/settings` }]}
        />
      </div>
      <div>
        <Tabs router={routerTabs} defaultComponent="settings" />
      </div>
    </div>
  )
}

export default BonfireIDPage
