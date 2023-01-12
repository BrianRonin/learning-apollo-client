
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import {Main as Button} from '../../Button/button_0/styles'
export const Main = styled.form`
  ${({ theme }) => css`
    //
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
