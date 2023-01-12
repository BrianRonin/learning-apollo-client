import { css, Theme } from '@emotion/react'

export const CSS_ScrollBar = (
  theme: Theme,
) => css`
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    opacity: 100%;
  }
  &::-webkit-scrollbar-thumb {
    ${theme.name === 'default' && css`
      background: ${theme.colors._black[3]};
    `}
    ${theme.name === 'dark' && css`
      background: ${theme.colors._primary[0]};
    `}
    border-radius: 100vw;
  }
  @supports (scrollbar-color: red blue) {
    scrollbar-color: #000000 ${theme.colors.primary[2]};
    scrollbar-width: thin;
  }
`
