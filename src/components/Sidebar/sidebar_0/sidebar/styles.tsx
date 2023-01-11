import { css, Theme } from '@emotion/react'
import styled from '@emotion/styled'

type typeSidebarBehavior = {
  sidebarVisible: boolean
  theme: Theme
}

const buttonSidebarBehavior = ({
  sidebarVisible,
  theme,
}: typeSidebarBehavior) => css`
  left: ${sidebarVisible ? '26rem' : '1rem'};
  color: ${sidebarVisible ? 'red' : 'yellow'};

  @media ${theme.media.lMedium} {
    left: ${sidebarVisible ? '26rem' : '-0.5rem'};
  }
`

const sidebarBehavior = ({
  sidebarVisible,
  theme,
}: typeSidebarBehavior) => css`
  left: ${sidebarVisible ? '-0rem' : '-30rem'};
  overflow-y: ${sidebarVisible
    ? 'hidden'
    : 'auto'};

  @media ${theme.media.lMedium} {
    left: ${sidebarVisible ? '0' : '-32rem'};
  }
`

export const Main = styled.div<typeSidebarBehavior>`
  ${({ theme, sidebarVisible }) => css`
    z-index: 3;
    background: ${theme.colors.bg[1]};
    padding: ${theme.spacings.large};
    display: flex;
    position: fixed;
    width: 100%;
    max-width: 32rem;
    height: 100vh;
    top: 0;
    left: -30rem;
    transition: all 300ms ease-in-out;
    overflow-y: auto;
    ${sidebarBehavior({ theme, sidebarVisible })}
  `}
`

export const Nav = styled.nav`
  ${({ theme }) => css`
    margin: auto;
    width: 100%;
  `}
`

export const Logo = styled.div`
  ${({ theme }) => css`
    h2 {
      display: flex;
      justify-content: center;
      margin: 0;
      margin-bottom: ${theme.spacings.huge};
      align-items: center;
      align-content: center;
      justify-items: center;
    }
  `}
`

export const OpenCloseSidebar = styled.a<typeSidebarBehavior>`
  ${({ theme, sidebarVisible }) => css`
    z-index: 4;
    position: fixed;
    top: ${theme.spacings.medium};
    background-color: ${theme.colors.bg[1]};
    height: 3rem;
    width: 3rem;
    left: 26rem;
    transition: all 300ms ease-in-out;

    svg {
      color: ${theme.colors.primary[2]} !important;
    }

    ${buttonSidebarBehavior({
      theme,
      sidebarVisible,
    })}
  `}
`
