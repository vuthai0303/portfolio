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
import { NavBarItem } from '../../types/NavBarItem'
import LanguageSwitcher from '../common/LanguageSwitcher'
import SplashCursor from '../common/SplashCursor'
import ThemeSwitcher from '../common/ThemeSwitcher'

const NavBar = () => {
  const { t } = useTranslation()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navBarItems = [
    {
      to: '/',
      title: t('NavBar.home'),
    },
    {
      to: '/project',
      title: t('NavBar.project'),
    },
    {
      to: '/experience',
      title: t('NavBar.experience'),
    },
  ]

  return (
    <>
      <SplashCursor />
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
          <NavBarItems navBarLst={navBarItems} isMenuItem={false} />
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
          <NavBarItems navBarLst={navBarItems} isMenuItem={true} />
        </NavbarMenu>
      </Navbar>
      <div className="w-full h-fit bg-gradient-to-r from-fuchsia-500 to-indigo-600">
        <div className="relative"></div>
        <Outlet />
      </div>
    </>
  )
}

const NavBarItems = ({
  navBarLst,
  isMenuItem = false,
}: {
  navBarLst: NavBarItem[]
  isMenuItem: boolean
}) => {
  const location = useLocation()

  return (
    <>
      {navBarLst.map((item, index) => {
        return !isMenuItem ? (
          <NavbarItem
            key={index}
            isActive={location.pathname == item.to}
            className="hover:text-primary"
          >
            <NavLink className={({ isActive }) => (isActive ? 'text-primary' : '')} to={item.to}>
              {item.title}
            </NavLink>
          </NavbarItem>
        ) : (
          <NavbarMenuItem
            key={index}
            isActive={location.pathname == item.to}
            className="hover:text-primary"
          >
            <NavLink className={({ isActive }) => (isActive ? 'text-primary' : '')} to={item.to}>
              {item.title}
            </NavLink>
          </NavbarMenuItem>
        )
      })}
    </>
  )
}

export default NavBar
