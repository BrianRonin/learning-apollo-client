import { switchButtonProps } from '.'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { inject_styles } from '../../../types/emotion'

export const Main = styled.div<{
  styles?: inject_styles
  stylesChecked?: inject_styles
}>`
  ${({ theme, styles, stylesChecked }) => css`
    display: flex;
    color: red !important;
    /* div > input:checked ~ div > * {
    } */
    ${styles && styles(theme)}
    ${stylesChecked && stylesChecked(theme)}
  `}
`
