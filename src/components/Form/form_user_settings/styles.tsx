
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Main as Form } from '../form/styles'
export const Main = styled.div`
  ${({ theme }) => css`
    width: 100%;
    .container-button {
      flex-direction: column;
      gap: 1.2rem;
    }
    .error-message {
      li {
        margin-top: 1rem;
        padding: 0.5rem;
        background: ${theme.colors.bg[1]};
        color: ${theme.colors.warning[4]};
        margin: 10px 0;
      }
    }
    @media ${theme.media.lMedium} {
      /* ${Form} {
        width: 80%;
        padding: 0;
      }
    } */
  `}
`
export const ContainerButton = styled.div`
  ${({theme}) => css`
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    .button-delete-user {
      background: ${theme.colors.warning[4]};
    }
  `}
`
export const ErrorMessage = styled.p`
  ${({theme}) => css`
    background: ${theme.colors.bg[1]};
    color: ${theme.colors.warning[4]};
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
  `}
`
