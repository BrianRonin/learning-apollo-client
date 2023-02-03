import { LogoLink } from '../logo_link'
import * as S from './styles'
import {
  NavLink,
  navLinkProps,
} from '../nav_link'
import {
  MouseEvent,
  useEffect,
  useState,
} from 'react'
import { useTheme } from '@emotion/react'
import { VscChromeClose } from 'react-icons/vsc'
import { VscMenu } from 'react-icons/vsc'
import { IconContext } from 'react-icons'
import { Router } from 'next/router'

export type sidebarProps = {
  links?: Omit<navLinkProps, 'loading'>[]
  title: string
  srcLogo?: string
}

export const Sidebar = ({
  links = [],
  title,
  srcLogo,
}: sidebarProps) => {
  const [sideBarVisible, setSideBarVisible] =
    useState(false)
  const theme = useTheme()
  const [routeLoading, setRouteLoading] =
    useState('')

  function handleButtonOpenCloseSidebar(
    e: MouseEvent,
  ) {
    e.preventDefault()
    setSideBarVisible((visible) => !visible)
  }

  useEffect(() => {
    Router.events.on('routeChangeStart', (e) =>
      setRouteLoading(e),
    )
    Router.events.on(
      'routeChangeComplete',
      () =>
        new Promise(() =>
          setTimeout(
            () => setRouteLoading(''),
            300,
          ),
        ),
    )
    Router.events.on(
      'routeChangeError',
      (e) =>
        new Promise(() =>
          setTimeout(
            () => setRouteLoading(''),
            300,
          ),
        ),
    )
    return () => {
      setRouteLoading('')
    }
  }, [Router.events])

  return (
    <>
      <IconContext.Provider
        value={{
          style: {
            color: 'white',
            fontSize: '2rem',
            marginTop: '0.5rem',
            marginLeft: '0.5rem',
          },
        }}
      >
        <S.OpenCloseSidebar
          sidebarVisible={sideBarVisible}
          href='#'
          aria-label='Open or close sidebar'
          title='Open or close sidebar'
          onClick={handleButtonOpenCloseSidebar}
          theme={theme}
        >
          {sideBarVisible && <VscChromeClose />}
          {!sideBarVisible && (
            <VscMenu color={theme.colors.bg[4]} />
          )}
        </S.OpenCloseSidebar>
        <S.Main
          aria-hidden={!sideBarVisible}
          sidebarVisible={sideBarVisible}
          theme={theme}
        >
          <S.Nav>
            <S.Logo>
              <LogoLink
                link='/'
                text={title}
                circle
                srcImg={srcLogo}
              />
            </S.Logo>
            {links.map((link, i) => (
              <NavLink
                key={'key-react-sidebar-' + i}
                link={link.link}
                newTab={link.newTab}
                text={link.text}
                visible={sideBarVisible}
                loading={routeLoading}
              />
            ))}
          </S.Nav>
        </S.Main>
      </IconContext.Provider>
    </>
  )
}
