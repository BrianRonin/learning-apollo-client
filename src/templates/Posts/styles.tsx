import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Main as Button } from '../../components/Button/button_0/styles'
import { Main as Title } from '../../components/Text/heading_0/styles'

export const Main = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    ${Title} {
      text-align: center;
      margin-bottom: 3;
    }
  `}
`

export const ContainerButtonLoadMores = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3rem;
    ${Button} {
      width: 40rem;
      media ${theme.media.lMedium} {
        width: 40vw;
      }
    }
  `}
`
