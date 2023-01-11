import { Theme, useTheme } from '@emotion/react'
import {
  ButtonHTMLAttributes,
  LegacyRef,
  ReactNode,
  useEffect,
  useState,
} from 'react'
import * as S from './styles'

type Settings = {
  children?: ReactNode
  disabled?: boolean
  onClick?: () => void
  icon?: ReactNode
  ref?: LegacyRef<HTMLButtonElement>
  custom?: buttonCustom
  outline?: boolean
  iconDirection?: 'left' | 'right'
  meta?: ButtonHTMLAttributes<HTMLButtonElement>
}

export type buttonCustom = {
  enabled: {
    color: string
    bg: string
  }
  disabled: {
    color: string
    bg: string
  }
}

export type buttonProps = {
  loadingSettings?: Settings
  isLoading?: boolean
} & Settings

export const Button = ({
  isLoading = false,
  loadingSettings = {},
  ...userSettings
}: buttonProps) => {
  const theme = useTheme()

  const preset: Settings = {
    iconDirection: 'left',
    children: undefined,
    custom: {
      enabled: {
        color: theme.colors.text[0],
        bg: theme.colors.primary[3],
      },
      disabled: {
        color: theme.colors.text[1],
        bg: theme.colors.primary[4],
      },
    },
    outline: false,
    disabled: false,
  }
  const [settings, setSettings] = useState({
    ...preset,
    ...userSettings,
  })

  useEffect(() => {
    isLoading
      ? setSettings({
          ...preset,
          ...userSettings,
          ...loadingSettings,
        })
      : setSettings({
          ...preset,
          ...userSettings,
        })
  }, [isLoading, theme])

  const {
    children,
    custom,
    disabled,
    icon,
    iconDirection,
    meta,
    onClick,
    outline,
    ref,
  } = settings as Required<Settings>

  const onlyIcon =
    typeof children === 'undefined' &&
    typeof icon !== 'undefined'

  const styles: buttonCustom = custom
    ? custom
    : {
        enabled: {
          color: theme.colors.text[0],
          bg: theme.colors.primary[3],
        },
        disabled: {
          color: theme.colors.text[1],
          bg: theme.colors.primary[4],
        },
      }

  return (
    <S.Main
      disabled={disabled}
      onClick={onClick}
      ref={ref}
      onlyIcon={onlyIcon}
      custom={styles}
      outline={!!outline}
      iconDirection={iconDirection}
      {...meta}
    >
      {!!icon && iconDirection === 'left' && icon}
      {children}
      {!!icon &&
        iconDirection === 'right' &&
        icon}
    </S.Main>
  )
}
