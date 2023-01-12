import { useTheme } from '@emotion/react'
import {
  ButtonHTMLAttributes,
  LegacyRef,
  MouseEvent,
  ReactNode,
  useEffect,
  useState,
} from 'react'
import * as S from './styles'

type Settings = {
  children?: ReactNode
  disabled?: boolean
  onClick?: (
    e: MouseEvent<HTMLButtonElement>,
  ) => any
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

export const Button = (
  userSettings: buttonProps,
) => {
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

  const [
    {
      children,
      custom,
      disabled,
      icon,
      iconDirection,
      meta,
      onClick,
      outline,
      ref,
    },
    setSettings,
  ] = useState({
    ...preset,
    ...userSettings,
  })

  useEffect(() => {
    userSettings.isLoading
      ? setSettings({
          ...preset,
          ...userSettings,
        })
      : setSettings({
          ...preset,
          ...userSettings,
        })
    return () => setSettings({})
  }, [userSettings, theme])

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
      iconDirection={iconDirection ?? 'left'}
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
