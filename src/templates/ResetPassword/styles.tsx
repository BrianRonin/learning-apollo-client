
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Main as Form } from '../../components/Form/form_reset_password/styles'
import {Main as Container, Inside as ContainerInside} from '../../components/Container/container_1/styles'

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
      ${ContainerInside} {
        padding: 5rem;
      }
    }
    @media ${theme.media.lMedium} {
      ${Form} {
        width: 80vw;
      }
      ${Container} {
        ${ContainerInside} {
          padding: 3rem;
        }
      }
    }
  `}
`
