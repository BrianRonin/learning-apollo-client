
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Main as Container, Inside } from '../../components/Container/container_1/styles'

export const Main = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    margin-top: 5rem;
    align-items: center;
    ${Container} {
      ${Inside} {
        width: max-content !important;
        padding: 4rem;
      }
    }
    @media ${theme.media.lSmallest} {
      margin: 0;
      padding: 0;
    }
  `}
`
