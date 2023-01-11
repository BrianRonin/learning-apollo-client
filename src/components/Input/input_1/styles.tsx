
import { css } from '@emotion/react'
import styled from '@emotion/styled'


export const Main = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column wrap;
  `}
`;

type mainProps = {
  isDisabled: boolean
  hasError: boolean
}

export const OuterInput = styled.div<mainProps>`
  ${({ theme, isDisabled, hasError }) => css`
    border: ${theme.spacings.xtiny} solid ${theme.colors.black[5]};
    border-radius: ${theme.radius.small};
    transition: all 300ms ease-in-out;
    background: ${theme.colors.bg[1]};
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    svg {
      width: ${theme.spacings.medium};
      height: ${theme.spacings.medium};
      margin-left: ${theme.spacings.xxsmall};
      color: ${hasError ? theme.colors.warning[2] : theme.colors.text[3]};
      transition: all 300ms ease-in-out;
    }
    &:focus-within {
      border-color: ${theme.colors[hasError ? 'warning' : 'primary'][2]};
      background: ${theme.colors.white};
      box-shadow: 0 0 5px ${theme.colors[hasError ? 'warning' : 'primary'][1]};
    }
    &:focus-within svg {
      color: ${theme.colors[hasError ? 'warning' : 'primary'][2]};
    }
    ${hasError &&
    css`
      border-color: ${theme.colors.warning[2]};
    `}
    ${isDisabled &&
    css`
      border-color: ${theme.colors.black[5]};
      background: ${theme.colors.black[3]};
      cursor: not-allowed;
    `}
  `}
`;

export const Input = styled.input<mainProps>`
  ${({ theme, hasError }) => css`
    outline: none;
    width: 100%;
    border: none;
    background: none;
    font-size: ${theme.fonts.sizes.medium};
    line-height: ${theme.fonts.sizes.medium};
    padding-top: ${theme.spacings.xxsmall};
    padding-bottom: ${theme.spacings.xxsmall};
    padding-right: ${theme.spacings.xsmall};
    padding-left: ${theme.spacings.xsmall};
    transition: all 300ms ease-in-out;
    &::placeholder {
      color: ${theme.colors.text[3]};
      transition: all 300ms ease-in-out;
    }
    &:focus {
      &::placeholder {
        color: ${theme.colors.text[4]};
      }
    }
    &:isDisabled {
      cursor: not-allowed;
        color: ${theme.colors.text[3]};
    }
    ${hasError &&
    css`
      color: ${theme.colors.warning[2]};
    `}
  `}
`;

export const InputLabelStyles = styled.label<mainProps>`
  ${({ theme, isDisabled, hasError }) => css`
    font-size: ${theme.fonts.sizes.small};
    line-height: ${theme.fonts.sizes.small};
    padding: ${theme.spacings.xsmall} 0;
    cursor: pointer;
    ${hasError &&
    css`
      color: ${theme.colors.warning[2]};
    `}
    ${isDisabled &&
    css`
      color: ${theme.colors.text[2]};
      cursor: not-allowed;
    `}
  `}
`;

export const InputError = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.warning[2]};
    font-size: ${theme.fonts.sizes.small};
    line-height: ${theme.fonts.sizes.small};
    margin-top: ${theme.spacings.small};
  `}
`;
