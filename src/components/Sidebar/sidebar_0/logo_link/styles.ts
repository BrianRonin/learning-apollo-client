import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Main = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  position: relative;

  > img {
    justify-content: center;
    display: inline-block;
    max-width: 150px;
    max-height: 150px;
    border-radius: 50%;
    z-index: 5;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover !important;
    -ms-background-size: cover;
    -o-background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
  }
`
export const LogoContainer = styled.div``

export const Logo_cubo = styled.img`
  bottom: 67px;
  left: 25px;
  position: absolute;
  width: 10rem;
  /* animation: rotating 85s linear infinite;a */
`
export const Logo = styled.img<{circle: boolean}>`
  ${({circle, theme}) => css`
    width: 15rem;
    position: 'absolute';
    width: '9rem';
    bottom: '70px';
    left: '30px';
    ${circle && css`
      border-radius: 50%;
    `}
  `}
`
