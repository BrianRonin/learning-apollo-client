
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { loadingAnimation } from '../../styles/css/loading/loading-animation.css'

export const Main = styled.div`
  ${({ theme }) => css`
    //
  `}
`


export const LoadingAnimation = styled.div`
  ${({theme}) => css`
  ${loadingAnimation(theme, {
    color: theme.colors.primary[2],
    duration: '1s',
    size: '8rem'
  })}
  `}
`
