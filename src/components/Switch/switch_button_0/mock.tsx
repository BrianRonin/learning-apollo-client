import { css, Theme } from '@emotion/react'
import { ButtonWithIcon } from '../../Button/button_1'
import { switchButtonProps } from '.'
import { GoAlert } from 'react-icons/go'

const whenActive = (theme: Theme) => css`
  --bg-icon: black;
  --bg-text: black;
`

export const mock_switch_button = {
  styles: (theme: Theme) => css`
    width: 100%;
    button {
      width: 100%;
    }
  `,
  Button: ButtonWithIcon,
  choices: [
    { text: 'test', Icon: GoAlert },
    { Icon: GoAlert, text: 'test' },
  ],
  choicesWhenActive: [
    {
      text: 'test',
      Icon: GoAlert,
      styles: {
        Button: whenActive,
      },
    },
    {
      Icon: GoAlert,
      text: 'test',
      styles: {
        Button: whenActive,
      },
    },
  ],
  values: ['test um', 'test dois'],
  preSelect: 0,
} as switchButtonProps
