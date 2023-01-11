import { css } from '@emotion/react'
import { Main as Container } from '../../Container/container_1/styles'
import { Main as Button } from '../../Button/button_0/styles'
import styled from '@emotion/styled'

export const Main = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    margin-top: 1rem;
    justify-content: center;
    ${Container} {
      width: ${theme.sizes.content};
    }
    @media ${theme.media.lLarge} {
      ${Container} {
        width: 80vw;
      }
    }
  `}
`
export const Heading = styled.h2`
  ${({ theme }) => css``}
`

export const Meta = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.text[3]};
    font-size: ${theme.fonts.sizes.small};
    margin: ${theme.spacings.tiny} 0;
  `}
`

export const MetaItem = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors._info[2]};
    margin: 0 ${theme.spacings.xxsmall};
  `}
`

export const PostTools = styled.div`
  ${({ theme }) => css`
    margin-top: 2rem;
    display: flex;
    gap: ${theme.spacings.xxsmall};
    justify-content: flex-end;
    ${Button} {
      > svg {
        width: 10px;
        height: 10px;
        scale: 2.3;
      }
    }
  `}
`

export const LoadMoreContainer = styled.div`
  ${({ theme }) => css``}
`
