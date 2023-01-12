import { css, Theme } from '@emotion/react'

export const CSS_ScrollBar = (
  theme: Theme,
) => css`
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-track {
    opacity: 100%;
  }
  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary[2]};
    border-radius: 100vw;
  }
  @supports (scrollbar-color: red blue) {
    scrollbar-color: #000000 ${theme.colors.primary[2]};
    scrollbar-width: thin;
  }
`
