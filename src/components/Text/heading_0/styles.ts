import { css, Theme } from '@emotion/react'
import styled from '@emotion/styled'
import { HeadingProps } from '.'

type props = Omit<HeadingProps, 'children'>

const titleSize = {
  small: (theme: Theme) => css`
    font-size: ${theme.sizes.medium};
  `,
  medium: (theme: Theme) => css`
    font-size: ${theme.sizes.large};
  `,
  big: (theme: Theme) => css`
    font-size: ${theme.sizes.xlarge};
    @media ${theme.media.lMedium} {
      font-size: ${theme.sizes.large};
    }
  `,
  huge: (theme: Theme) => css`
    font-size: ${theme.sizes.xhuge};
    ${mediaFont(theme)}
  `,
}

const mediaFont = (theme: Theme) => css`
  @media ${theme.media.lMedium} {
    font-size: ${theme.sizes.xlarge};
  }
`

export const Title = styled.h1<props>`
  ${({
    theme,
    size,
    uppercase,
  }) => css`
    color: ${theme.colors.text[4]};
    text-transform: ${uppercase
      ? 'uppercase'
      : 'none'};
    ${!!size && titleSize[size](theme)};
  `}
`
