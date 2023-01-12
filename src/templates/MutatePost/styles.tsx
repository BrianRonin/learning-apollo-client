import { css } from '@emotion/react'
import styled from '@emotion/styled'
import {Main as Form} from '../../components/Form/form_post/styles'
import { Main as Container, Inside } from '../../components/Container/container_1/styles'

export const Main = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
    ${Form} {
      width: 50rem;
    }
    ${Container} {
      ${Inside} {
        padding: 7rem;
      }
    }
    @media ${theme.media.lMedium} {
      ${Form} {
        width: 80vw;
      }
      ${Container} {
        ${Inside} {
          padding: 3rem;
        }
      }
    }
  `}
`
