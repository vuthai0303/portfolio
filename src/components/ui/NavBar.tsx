import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@heroui/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import LanguageSwitcher from '../common/LanguageSwitcher'
import ThemeSwitcher from '../common/ThemeSwitcher'

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

const NavBar = () => {
  const location = useLocation()
  const { t } = useTranslation()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <Navbar shouldHideOnScroll isBordered onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="sm:hidden"
          />
          <NavbarBrand>
            <AcmeLogo />
            <p className="font-bold text-inherit">Vũ Thái</p>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem isActive={location.pathname == '/'}>
            <NavLink className={({ isActive }) => (isActive ? 'text-primary' : '')} to="/">
              {t('NavBar.home')}
            </NavLink>
          </NavbarItem>
          <NavbarItem isActive={location.pathname == '/about'}>
            <NavLink className={({ isActive }) => (isActive ? 'text-primary' : '')} to="/about">
              {t('NavBar.about')}
            </NavLink>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <ThemeSwitcher />
          </NavbarItem>
          <NavbarItem>
            <LanguageSwitcher />
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          <NavbarMenuItem isActive={location.pathname == '/'}>
            <NavLink to="/">{t('NavBar.home')}</NavLink>
          </NavbarMenuItem>
          <NavbarMenuItem isActive={location.pathname == '/about'}>
            <NavLink to="/about">{t('NavBar.about')}</NavLink>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
      <div className="mt-16 flex-1">
        <main className="w-full h-full">
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default NavBar
