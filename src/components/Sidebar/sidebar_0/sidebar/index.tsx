import { LogoLink } from '../logo_link'
import * as S from './styles'
import {
  NavLink,
  navLinkProps,
} from '../nav_link'
import { MouseEvent, useState } from 'react'
import { useTheme } from '@emotion/react'
import { VscChromeClose } from 'react-icons/vsc'
import { VscMenu } from 'react-icons/vsc'
import { IconContext } from 'react-icons'

export type sidebarProps = {
  links?: navLinkProps[]
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
  function handleButtonOpenCloseSidebar(
    e: MouseEvent,
  ) {
    e.preventDefault()
    setSideBarVisible((visible) => !visible)
  }

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
              />
            ))}
          </S.Nav>
        </S.Main>
      </IconContext.Provider>
    </>
  )
}
