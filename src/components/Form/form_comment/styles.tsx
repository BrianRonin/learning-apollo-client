import { css } from '@emotion/react'
import { Main as Input } from '../../Input/input_0/styles'
import { Main as Container } from '../../Container/container_1/styles'
import styled from '@emotion/styled'

export const Main = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;
    h3 {
      margin: 0 auto;
    }
    ${Container} {
      display: flex;
    }
  `}
`

export const Form = styled.form`
  ${({ theme }) => css`
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    width: 100%;
    margin: ${theme.spacings.medium} 0;
    ${Input} {
      align-self: center;
      margin: ${theme.spacings.medium} 0;
    }
  `}
`;
