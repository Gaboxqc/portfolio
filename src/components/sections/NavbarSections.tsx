import { useRef, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router'
import { motion } from 'framer-motion'
import useLanguage from '../../hooks/useLanguage'

interface NavbarSectionsProps {
  pill?: boolean
}

const NavbarSections = ({ pill = false }: NavbarSectionsProps) => {
  const { translate, locale } = useLanguage()
  const { pathname } = useLocation()
  const navRef = useRef<HTMLDivElement>(null)
  const [indicator, setIndicator] = useState({ left: 0, width: 0 })
  const [hasMeasured, setHasMeasured] = useState(false)

  const links = [
    { name: translate('navbar.home'), path: '/' },
    { name: translate('navbar.courses'), path: '/courses' },
    { name: translate('navbar.projects'), path: '/projects' },
  ]

  useEffect(() => {
    const activeEl = navRef.current?.querySelector<HTMLElement>('[data-active="true"]')
    if (!activeEl) return
    setIndicator({ left: activeEl.offsetLeft, width: activeEl.offsetWidth })
    setHasMeasured(true)
  }, [pathname, locale])

  return (
    <div
      ref={navRef}
      className={`relative flex h-12 items-center justify-center rounded-full ${
        pill ? ' border bg-card/60 shadow-lg shadow-black/50 backdrop-blur-md' : ''
      }`}
    >
      <motion.div
        className='absolute inset-y-0 -z-10 rounded-full bg-linear-to-r from-primary/60 to-accent/60'
        initial={false}
        animate={{ ...indicator, opacity: hasMeasured ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
      />
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          data-active={pathname === link.path}
          className={({ isActive }) =>
            `text-md ${isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'} px-4 py-2 font-medium transition-colors duration-300`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  )
}

export default NavbarSections
