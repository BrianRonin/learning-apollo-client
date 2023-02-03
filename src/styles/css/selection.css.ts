import { css, Theme } from "@emotion/react";

export const CSS_notSelect = (theme: Theme) => css`
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export const CSS_select = (theme: Theme) => css`
  -webkit-tap-highlight-color: ${theme.colors.info[2]};
  -webkit-touch-callout: ${theme.colors.info[2]};
  -webkit-user-select: text;
  -khtml-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
  ::selection {
    background-color: ${theme.colors.bg[3]};
    color: ${theme.colors.info[2]}
  }
`
