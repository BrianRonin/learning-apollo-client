import { css } from '@emotion/react'
import { Main as Input } from '../../Input/input_0/styles'
import { Inside, Main as Container } from '../../Container/container_1/styles'
import styled from '@emotion/styled'
import { Main as Heading } from '../../Text/heading_0/styles'
import { Main as Button } from '../../Button/button_1/styles'

export const Main = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 5rem;
    ${Heading} {
      margin: 2rem;
    }
  `}
`

export const Form = styled.form`
  ${({ theme }) => css`
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    width: 80%;

    ${Input} {
      width: 90%;
      max-width: 80rem;
      textarea {
        resize: vertical;
      }
    }
    .button-container {
      display: flex;
      width: 100%;
      margin-bottom: 3rem;
      justify-content: center;
      ${Button} {

      }
    }
    @media ${theme.media.lMedium} {
      width: 100%;
      .button-container {
        margin-right: 5rem;
        justify-content: end;
      }
    }

  `}
`;
