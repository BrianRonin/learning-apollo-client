import { css, Theme } from '@emotion/react'
import styled from '@emotion/styled'
import { inputProps } from '.'

const onInputError = (
  theme: Theme,
  errorMessage: string,
) => css`
  border: ${theme.spacings.xxtiny} solid ${theme.colors.warning[0]};
  &:focus {
    border: ${theme.spacings.xxtiny} solid ${theme.colors.warning[0]};
    box-shadow: 0 0 ${theme.spacings.xxsmall} ${theme.colors.warning[2]};
  }
  /* ${!!errorMessage &&
  css`
    &:focus
      + ${Label},
      &:not(:placeholder-shown)
      + ${Label} {
      color: ${theme.colors._warning[3]};
      background: ${theme.colors.warning[4]};
    }
  `} */
`

export const Main = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.large};
    box-sizing: border-box;
  `}
`

export const inputContainer = styled.div<{
  errorMesage: string
  hasIcon: boolean
}>`
  ${({ theme, errorMesage, hasIcon }) => css`
    position: relative;
    display: flex;
    > svg {
      pointer-events: none;
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      right: 13px;
      width: 2.5rem;
      height: 2.5rem;
      color: ${theme.colors._primary[2]};
      z-index: ${theme.layers[0]};
      ${!!errorMesage &&
      css`
        color: ${theme.colors.warning[3]};
      `}
    }

    *:focus ~ svg {
      color: ${theme.colors.primary[3]};
      ${!!errorMesage && css`
        color: ${theme.colors.warning[2]};
      `}
    }
    *:disabled ~ svg {
      color: ${theme.colors.white[4]};
    }

    ${!hasIcon && css`
      > svg {
        pointer-events: all;
        &:hover {
          z-index: ${theme.layers[1]};
          cursor: pointer;
          color: ${theme.colors.info[3]};
        }
      }
    `}
  `}
`

type StyledInputType = Pick<
  inputProps,
  'errorMessage' | 'as' | 'type'
>

export const Input = styled.input<StyledInputType>`
  ${({ theme, errorMessage, as }) => css`
    border: 1px solid ${theme.colors.black[10]};
    width: 100%;
    font-size: ${theme.fonts.sizes.normal};
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};
    background: ${theme.colors.bg[1]};
    padding-right: 4rem;
    border-radius: ${theme.spacings.tiny};
    outline: none;
    color: ${theme.colors.text[4]};
    &::placeholder {
      visibility: hidden;
      opacity: 0;
    }
    &:focus {
      border: ${theme.spacings.xxtiny} solid ${theme.colors.primary[3]};
      box-shadow: 0px 0px ${theme.sizes.small}
      ${theme.name === 'default' ? theme.colors.white[10] : theme.colors.primary[1]};
    }
    &:focus
      + ${Label},
      &:not(:placeholder-shown)
      + ${Label},
      &:-webkit-autofill
      + ${Label} {
      top: 0;
      transform: translate(0, -50%);
      font-size: ${theme.fonts.sizes.xsmall};
      color: ${theme.colors._text[4]};
      background: ${theme.colors._primary[0]};
      filter: none;
      ${as === 'textarea' &&
      css`
        transform: translate(0, -50%);
      `}
    }

    ${as === 'textarea' &&
    css`
      min-height: ${theme.frameSizes.xsmall};
      padding-right: ${theme.spacings.xsmall};
    `}

    ${!!errorMessage &&
    onInputError(theme, errorMessage)}
  `}
`

export const Label = styled.label<{
  element: string
}>`
  ${({ theme, element }) => css`
    display: inline;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: ${theme.spacings.xsmall};
    font-size: ${theme.fonts.sizes.small};
    height: ${theme.fonts.sizes.small};
    transition: ${theme.transitions[2]};
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    line-height: 1;
    pointer-events: none;
    z-index: ${theme.layers[0]};
    color: ${theme.colors.info[3]};
    border-radius: ${theme.spacings.tiny};
    ${element === 'textarea' &&
    css`
      top: ${theme.spacings.large};
      transform: translate(0, -50%);
    `}
  `}
`
export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.warning[3]};
    margin: ${theme.spacings.xxsmall} 0 ${theme.spacings.large};
  `}
`
