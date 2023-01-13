import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { loadingAnimationSidebar } from '../../../../styles/css/sidebar-loading-animation.css'

export const Main = styled.a<{loading: boolean}>`
  ${({ theme, loading }) => css`
    color: ${theme.colors.primary[3]};
    display: block;
    position: relative;
    text-decoration: none;
    margin-bottom: ${theme.spacings.small};
    font-size: 1.8rem;
    border-right: 0.5rem solid ${theme.colors.bg[2]};
    &:hover {
      color: ${theme.colors._secondary[0]};
      border-right-color: ${theme.colors._secondary[0]};
    }

    ${loading && loadingAnimationSidebar(theme)}
  `}
`
