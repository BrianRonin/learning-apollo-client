import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { buttonCustom } from '.'
import { dynamicButton } from '../../../styles/css/dynamic-button'

type mainProps = {
  onlyIcon: boolean
  custom: buttonCustom
  outline: boolean
  iconDirection: 'left' | 'right'
}

export const Main = styled.button<mainProps>`
  ${({
    theme,
    onlyIcon,
    custom,
    outline,
    iconDirection,
  }) => css`
    --bg: ${custom.enabled.bg};
    --color: ${custom.enabled.color};
    --ds-color: ${custom.disabled.color};
    --ds-bg: ${custom.disabled.bg};

    background: var(--bg);
    border: none;
    color: var(--color);
    font-size: ${theme.fonts.sizes.medium};
    padding: ${theme.spacings.xsmall}
      ${theme.spacings.medium};
    cursor: pointer;
    border-radius: ${theme.spacings.tiny};
    transition: transform ${theme.transitions[0]}
      ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    ${theme.name === 'default' &&
    css`
      box-shadow: 0px 0px 20px
        ${theme.colors.white[8]};
    `}
    > svg {
      width: 2rem;
      height: 2rem;
      ${iconDirection === 'left' && !onlyIcon
        ? css`
            margin-right: 1rem;
          `
        : css`
            margin-left: 1rem;
          `}
    }

    ${dynamicButton()}

    ${!!onlyIcon &&
    css`
      padding: ${theme.spacings.xsmall}
        ${theme.spacings.xsmall};
      border-radius: 50%;
      > svg {
        margin-left: 0;
      }
    `}
    ${outline &&
    css`
      border: 2px solid var(--bg);
      color: var(--bg);
      background: none;
    `}
  `}
`
