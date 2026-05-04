import { type FC } from 'react'
import cl from './Navbar.module.scss'
import { appConfig, titleRouter } from '@/config/app.config'
import { useAuth } from '@/context/AuthContext'
import ButtonDefault from '../UI/ButtonDefault/ButtonDefault'
import { useLocation, useNavigate } from 'react-router-dom'

const Navbar: FC = () => {
  const { isAuth, user, logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const currentPath = location.pathname.replace(/^\/+|\/+$/g, '')
  const currentRouteTitle = titleRouter.sections.find(
    (item) =>
      currentPath === item.path || currentPath.startsWith(`${item.path}/`),
  )?.title

  return (
    <nav className={`${cl.navbar}`}>
      <button className={cl.logo} onClick={() => navigate('/')}>
        {appConfig.nameApp}
      </button>
      <div>{currentRouteTitle}</div>
      <div>
        {isAuth ? (
          <>
            <span className={cl.user}>{user?.displayName || user?.email}</span>
            <ButtonDefault onClick={() => logout()}>Logout</ButtonDefault>
          </>
        ) : (
          <ButtonDefault onClick={() => navigate('/auth')}>Login</ButtonDefault>
        )}
      </div>
    </nav>
  )
}

export default Navbar
