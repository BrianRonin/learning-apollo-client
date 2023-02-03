
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { CSS_ScrollBar } from '../../../styles/css/scrollbar/scrollbar_0.css'
import { Main as Button } from '../../Button/button_0/styles'
import { Main as Form } from '../form/styles'
export const Main = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    width: 100%;
    ${Form} {
      width: 100%;
      max-width: 80rem;
    }
    @media ${theme.media.lMedium} {
      ${Form} {
        padding: 2rem;
        padding-top: 5rem;
      }
    }
  `}
`
