import {
  Checkbox,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuItem,
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
      <div className="w-full min-h-screen h-fit overflow-hidden bg-gradient-to-r from-fuchsia-500 to-indigo-600 flex justify-center">
      <div className="w-full lg:w-[80%] h-fit p-3 flex flex-col gap-5">
        <Navbar
          isBordered
          classNames={{ base: 'rounded-full top-2 bg-background/90', wrapper: 'max-w-[100%]' }}
        >
          <NavbarContent>
            <NavbarBrand>
              <img
                src="/portfolio/logo.png"
                className="d-inline-block align-top size-12 lg:size-16"
                alt="VT logo"
              />
              <GradientText
                colors={['#DD62ED', '#4014ff', '#DD62ED', '#4014ff', '#DD62ED']}
                animationSpeed={5}
                showBorder={false}
                className="font-bold text-xl ml-2 hidden lg:visible"
                baseStyle={{ fontWeight: 700 }}
              >
                Vũ Thái
              </GradientText>
            </NavbarBrand>
          </NavbarContent>
          <NavbarContent className="flex gap-4" justify="center">
            <NavBarItems navBarLst={navBarItems} isMenuItem={false} />
          </NavbarContent>
          <NavbarContent justify="end" className='hidden lg:flex'>
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
