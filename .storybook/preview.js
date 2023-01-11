import { addDecorator } from '@storybook/react'
import { withThemes } from '@react-theming/storybook-addon'
import { DefaultTheme } from '../src/styles/theme/default'
import { dark_theme } from '../src/styles/theme/dark'
import { ThemeProvider } from '@emotion/react'
import { GlobalStyles } from '../src/styles/globals'
// import { Theme } from '../src/contexts/theme/theme'

// import styled from '@emotion/styled'
// const background = styled.div`
//   background-color: red !important;
//   color: red !important;
// `

const ProviderTheme = ({ theme, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

// const getCustomFieldSnippet = (selectedValue) => {
//   const { namespace, name } = selectedValue
//   const path = namespace.join('.')
//   const fullPath = `${path}.${name}`
//   const themeProp = `\${({ theme }) => theme.${fullPath}}`
//   return themeProp
// }

export const onThemeSwitch = (context) => {
  const { theme } = context
  const parameters = {
    backgrounds: {
      default: theme.colors.bg[0],
    },

    // Pass backgrounds: null to disable background switching at all
  }
  return {
    parameters,
  }
}

addDecorator(
  withThemes(
    ProviderTheme,
    [DefaultTheme, dark_theme],
    {
      onThemeSwitch,
    },
  ),
)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [(Story) => <Story />]
