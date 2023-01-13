import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { CSS_ScrollBar } from '../../styles/css/scrollbar/scrollbar_0.css'

export const Main = styled.div`
  ${({ theme }) => css`
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    margin: 3rem 6rem;
    @media ${theme.media.lMedium} {
      margin: 0;
    }
  `}
`
