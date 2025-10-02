import {
  Checkbox,
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
import GradientText from '../common/GradientText'
import LanguageSwitcher from '../common/LanguageSwitcher'
import SplashCursor from '../common/SplashCursor'
import ThemeSwitcher from '../common/ThemeSwitcher'

const NavBar = () => {
  const { t } = useTranslation()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isOpenSplashCursor, setIsOpenSplashCursor] = useState(false)

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
    {
      to: '/tools',
      title: t('NavBar.tools'),
    },
  ]

  return (
    <>
    {isOpenSplashCursor && <SplashCursor />}
    <div className="w-full h-screen overflow-auto no-scrollbar bg-gradient-to-r from-fuchsia-500 to-indigo-600 flex justify-center">
      <div className="w-[80%] min-w-[620px] h-fit p-3 no-scrollbar flex flex-col gap-5">
        <Navbar
          isBordered
          onMenuOpenChange={setIsMenuOpen}
          classNames={{ base: 'rounded-full top-2 min-w-[600px] bg-background/90', wrapper: 'max-w-[100%]' }}
        >
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              className="lg:hidden"
            />
            <NavbarBrand>
              <img
                src="/portfolio/logo.png"
                className="d-inline-block align-top size-16"
                alt="VT logo"
              />
              <GradientText
                colors={['#DD62ED', '#4014ff', '#DD62ED', '#4014ff', '#DD62ED']}
                animationSpeed={5}
                showBorder={false}
                className="font-bold text-xl ml-2 "
                baseStyle={{ fontWeight: 700 }}
              >
                Vũ Thái
              </GradientText>
            </NavbarBrand>
          </NavbarContent>
          <NavbarContent className="hidden lg:flex gap-4" justify="center">
            <NavBarItems navBarLst={navBarItems} isMenuItem={false} />
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem>
              <Checkbox
                defaultSelected
                color="primary"
                isSelected={isOpenSplashCursor}
                onValueChange={setIsOpenSplashCursor}
              >
                {t('NavBar.cursorEffect')}
              </Checkbox>
            </NavbarItem>
            <NavbarItem>
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
        <Outlet />
      </div>
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
