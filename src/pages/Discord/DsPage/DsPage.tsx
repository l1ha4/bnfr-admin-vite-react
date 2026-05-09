// src\pages\Discord\DsPage\DsPage.tsx

import { useEffect, type FC } from 'react'
import cl from './DsPage.module.scss'
import FormNavigate from '@/components/UI/Navigate/FormNavigate/FormNavigate'
import { dsPages } from '@/config/dsBotsPages.config'
import Section from '@/components/UI/Section/Section'
import { useAppDispatch } from '@/hooks/redux'
import { fetchBots } from '@/store/dsBots/listDsBots/listDsBots.slice'
import { useNavigate } from 'react-router-dom'

const DsPage: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchBots())
  }, [dispatch])
  return (
    <div className={`page ${cl.page}`}>
      <FormNavigate
        title={`${dsPages.dsPage.title}`}
        subtitle={dsPages.dsPage.subtitle}
      />
      <div className={cl.sections}>
        <Section
          title={dsPages.dsPage.sections.dsBots.title}
          status={dsPages.dsPage.sections.dsBots.status}
          textButton={dsPages.dsPage.sections.dsBots.textButton}
          onClick={() => navigate(dsPages.dsPage.sections.dsBots.path)}
        />
        <Section
          title={dsPages.dsPage.sections.workshop.title}
          status={dsPages.dsPage.sections.workshop.status}
        />
      </div>
    </div>
  )
}

export default DsPage
