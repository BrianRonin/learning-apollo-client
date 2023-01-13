
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Main as Form } from '../../components/Form/form_login/styles'
import { Main as Container, Inside } from '../../components/Container/container_1/styles'

export const Main = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    margin-top: 5rem;
    align-items: center;
    ${Form} {
      width: 50rem;
    }
    ${Container} {
      ${Inside} {
        padding: 4rem;
      }
    }
    @media ${theme.media.lMedium} {
      ${Form} {
        justify-content: center;
        align-items: center;
        padding: 10vw;
        width: 100%;
      }
    }
    @media ${theme.media.lSmallest} {
      margin: 0;
      padding: 0;
    }
  `}
`
