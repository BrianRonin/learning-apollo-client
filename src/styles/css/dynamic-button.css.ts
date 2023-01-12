import { css } from '@emotion/react'

type dynamicButtonProps = {
  brightness?: boolean
  disabled?: boolean
  scaleWhenActive?: boolean
}
export const dynamicButton = (
  {
    brightness,
    disabled,
    scaleWhenActive,
  }: dynamicButtonProps = {
    brightness: true,
    disabled: true,
    scaleWhenActive: true,
  },
) => {
  return css`
    &:focus {
      outline: none;
      ${!!brightness &&
      css`
        filter: brightness(110%);
      `}
    }

    &:hover {
      ${!!brightness &&
      css`
        filter: brightness(90%);
      `}
    }

    &:disabled {
      cursor: not-allowed;
      ${!!scaleWhenActive &&
      css`
        &:active {
          transform: translate(1px, 0);
        }
        &:hover {
          filter: none;
        }
      `}
    }

    &:active {
      ${!!scaleWhenActive &&
      css`
        transform: scale(0.99, 0.99);
      `}
    }

    &:not(:hover) {
      filter: none;
    }
  `
}
