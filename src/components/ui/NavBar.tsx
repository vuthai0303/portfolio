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
            <img
              src="/portfolio/logo.png"
              className="d-inline-block align-top size-16"
              alt="VT logo"
            />
            <p className="font-bold text-inherit ml-5">Vũ Thái</p>
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
      <div className="w-full h-full">
        <main className="w-full h-full">
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default NavBar
