import { css } from '@emotion/react'
import { Inside, Main as Container } from '../../Container/container_1/styles'
import { Main as Button } from '../../Button/button_0/styles'
import styled from '@emotion/styled'
import { loadingAnimation } from '../../../styles/css/loading/loading-animation.css'

export const Main = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;
    justify-content: center;
    align-items: center;
    position: relative;
    gap: 1rem;
  }
    ${Container} {
      width: ${theme.sizes.content};
      &:hover {
        cursor: pointer;
      }
      &.loading {
        ${Inside} {
          @keyframes loadingComponent {
            0% {
              background-color: ${theme.colors.bg[0]};
            }
            100% {
              background-color: ${theme.colors.bg[1]};
            }
          }
          animation: loadingComponent 800ms infinite alternate;
          border-color: none;
          box-shadow: none;
          display: flex;
          justify-content: center;
          padding: 5rem;
        }
      }
    }
    @media ${theme.media.lLarge} {
      ${Container} {
        width: 90vw;
      }
    }
  `}
`

export const ContainerLoading = styled.div`
  ${({ theme }) => css`
    ${loadingAnimation(theme, {
      color: theme.colors.info[1],
      duration: '800ms',
      size: '10rem',
    })}
    position: relative;
  `}
`

export const Heading = styled.h2`
  ${({ theme }) => css`
    @media ${theme.media.lMedium} {
      font-size: calc(
        ${theme.fonts.sizes.medium} - 3px
      );
      margin: 0;
      margin-bottom: ${theme.fonts.sizes.small};
    }
  `}
`

export const Meta = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.text[3]};
    margin: ${theme.spacings.tiny} 0;
    font-size: ${theme.fonts.sizes.small};
    @media ${theme.media.lMedium} {
      font-size: calc(
        ${theme.fonts.sizes.small} - 2px
      );
    }
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
    z-index: 8;
    ${Button} {
      > svg {
        width: 10px;
        height: 10px;
        scale: 2.3;
      }
    }

    @media ${theme.media.lMedium} {
      margin: 0;
      ${Button} {
        > svg {
          width: 8px;
          height: 8px;
          scale: 3;
        }
      }
    }
  `}
`

