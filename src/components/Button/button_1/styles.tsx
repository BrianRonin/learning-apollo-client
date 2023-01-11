import { buttonProps } from '.'
import { css, Theme } from '@emotion/react'
import styled from '@emotion/styled'
import { inject_styles } from '../../../types/emotion'
import { dynamicButton } from '../../../styles/css/dynamic-button'

export const Main = styled.div<{
  styles?: inject_styles
}>`
  ${({ theme, styles }) => css`
    display: flex;
  --bg-icon: ${theme.colors.primary[2]};
  --bg-text: ${theme.colors.bg[1]};
  --bg-hover: var(--bg-icon);
  --bg-icon-size: 30%;
  --icon-size: 3rem;
  --container-icon: calc(
    var(--bg-icon-size) - var(--padding-x)
  );
  --mg-left-text: 34px;
  --mg-left-icon: 0px;
  --padding-x: 15px;
  --padding-y: 10px;
  --space-icon-size: calc(
    var(--bg-icon-size) + var(--padding-x)
  );
    ${styles && styles(theme)}
  `}
`

export const Button = styled.button<{
  styles?: inject_styles
}>`
  ${({ theme, styles }) => css`
    ${dynamicButton()}
    position: relative;
    display: flex;
    border: 0;
    font: 600 20px 'Open Sans';
    color: ${theme.colors.text[4]};
    padding: var(--padding-y) var(--padding-x);
    border-radius: 3px;
    display: inline-block;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    transition:
      background-color 100ms ease-in-out,
      color 400ms ease-in-out;
    background: -webkit-linear-gradient(
      left,
      var(--bg-icon) var(--bg-icon-size),
      var(--bg-text) 0
      );
    :hover {
      color: ${theme.colors.bg[0]};
    }
    &::after {
      position: absolute;
      background-color: var(--bg-hover);
      width: 100%;
      height: 100%;
      top: 0;
      left: -100%;
      content: '';
      -webkit-transition: 1s
        cubic-bezier(0.165, 0.85, 0.45, 1);
      transition: 1s
        cubic-bezier(0.165, 0.85, 0.45, 1);
    }
    :hover::after {
      left: 0;
    }
    ${styles && styles(theme)}
  `}
`
export const Content = styled.div<{
  styles?: inject_styles
}>`
  ${({ theme, styles }) => css`
    display: flex;
    position: relative;
    z-index: 5;
    align-items: center;
    ${styles && styles(theme)}
  `}
`
export const IconContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: var(--container-icon);
    justify-content: center;
    align-items: center;
    svg {
      color: ${theme.colors.bg[0]};
      width: var(--icon-size);
      height: var(--icon-size);
    }
    margin-left: var(--mg-left-icon));
  `}
`
export const TextContainer = styled.span<{
  styles?: inject_styles
}>`
  ${({ theme, styles }) => css`
    ${styles && styles(theme)}
    justify-content: center;
    align-items: center;
    display: flex;
    white-space: nowrap;
    margin-left: var(--mg-left-text);
  `}
`
