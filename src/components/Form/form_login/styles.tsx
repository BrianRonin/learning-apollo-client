import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Main as Input } from '../../Input/input_0/styles'

export const Main = styled.form`
  ${({ theme }) => css`
    .submit-button {
      width: 100%;
    }
    .top-buttons {
      margin-bottom: 3rem;
    }
  `}
`
export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 3rem;
`
export const ContainerForm = styled.div`
  height: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const ErrorMessage = styled.p`
  ${({theme}) => css`
    background: ${theme.colors.bg[1]};
    color: ${theme.colors.warning[4]};
  `}
`
