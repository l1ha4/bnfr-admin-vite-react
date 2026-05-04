import type { NavigateFunction } from 'react-router-dom'

export function goBack(
  navigate: NavigateFunction,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
) {
  return (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate(-1)
    onClick?.(e)
  }
}
