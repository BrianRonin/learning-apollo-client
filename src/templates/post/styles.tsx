
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Main as Heading } from '../../components/Text/heading_0/styles'
import { Main as Text } from '../../components/Text/text_0/styles'

export const Main = styled.div`
  ${({ theme }) => css`
    ${Heading} {
      text-align: center;
      margin: 5rem;
    }
    hr {
      margin-bottom: 5rem;
      margin-right: 2rem;
      margin-left: 2rem;
    }
    ${Text} {
      margin: 2rem;
    }
  `}
`
