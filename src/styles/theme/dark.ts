import { makeHsl } from '../../utils/make-hsl'
import {
  cl_bg,
  cl_black,
  cl_info,
  cl_primary,
  cl_secondary,
  cl_success,
  cl_text,
  cl_warning,
  cl_white,
  DefaultTheme,
} from './default'

export const dark_theme = {
  ...DefaultTheme,
  name: 'dark',
  colors: {
    ...DefaultTheme.colors,
    black: makeHsl(cl_white),
    white: makeHsl(cl_black),
    bg: makeHsl({
      ...cl_bg,
      color: 'hsl(0, 0%, 100%)',
      position: 'end',
      orderLight: true,
    }),
    primary: makeHsl({
      ...cl_primary,
      inverse: true,
    }),
    secondary: makeHsl({
      ...cl_secondary,
      inverse: true,
    }),
    text: makeHsl({
      ...cl_text,
      inverse: true,
      position: 'end',
    }),
    warning: makeHsl({
      ...cl_warning,
      inverse: true,
    }),
    info: makeHsl({ ...cl_info, inverse: true }),
    success: makeHsl({
      ...cl_success,
      inverse: true,
    }),
  },
} as typeof DefaultTheme
