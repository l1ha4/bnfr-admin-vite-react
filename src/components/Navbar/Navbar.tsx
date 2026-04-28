import type { FC } from 'react'
import cl from './Navbar.module.scss'

const Navbar: FC = () => {
  return <nav className={`${cl.navbar}`}>
    <span>BNFR ADMIN</span>
  </nav>
}

export default Navbar