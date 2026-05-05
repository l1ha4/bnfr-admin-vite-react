import type { NavigateFunction } from 'react-router-dom'

function getParentPath(pathname: string) {
  const pathParts = pathname.split('/').filter(Boolean)

  if (pathParts.length <= 1) {
    return '/'
  }

  return `/${pathParts.slice(0, -1).join('/')}`
}

export function goBack(
  navigate: NavigateFunction,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
  returnPath?: string,
  pathname?: string,
) {
  return (e: React.MouseEvent<HTMLButtonElement>) => {
    if (returnPath) {
      navigate(returnPath)
    } else if (pathname) {
      navigate(getParentPath(pathname))
    } else {
      navigate('/')
    }
    onClick?.(e)
  }
}
