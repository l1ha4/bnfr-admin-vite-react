import type { FC } from 'react'

export type IStateTabProps = {
  onTabChange: (tab: string) => void
}

export type IStateTabTypes = Array<[string, FC<IStateTabProps>]>
