import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Inside = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.bg[0]};
    padding: ${theme.spacings.medium};
    width: 100%;
    border-radius: 3rem;
    box-shadow: 0 0.2rem 1rem ${theme.colors.white[4]};
    border: 0.1rem solid ${theme.colors.bg[0]};
    transition: all 300ms ease-in-out;
    position: relative;
    overflow: hidden;
    @media ${theme.media.lMedium} {
      &:hover {
        box-shadow: 0 0 1rem ${theme.colors.white[5]};
      }
    }
  `}
`

export const Main = styled.div`
  display: flex;
  justify-content: center;
`
