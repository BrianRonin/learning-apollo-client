import {
  ChangeEvent,
  ChangeEventHandler,
  ReactNode,
  useEffect,
  useState,
} from 'react'
import * as S from './styles'

export type inputProps = {
  label: string
  id: string
  placeholder: string
  icon: ReactNode
  textArea: boolean
  onChange: (
    nextValue: string,
    element: EventTarget & HTMLInputElement,
  ) => any
  value: string
  disabled: boolean
  error: string
}

export const Input = ({
  label,
  id,
  placeholder = '',
  icon,
  textArea,
  onChange,
  value = '',
  disabled = false,
  error,
}: inputProps) => {
  const [_value, setValue] = useState('')

  useEffect(() => {
    setValue(value)
  }, [_value])

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    const element = e.target
    const nextValue = element.value

    setValue(nextValue)

    if (onChange) {
      onChange(nextValue, element)
    }
  }

  return (
    <S.Main>
      {!!label && (
        <S.InputLabelStyles
          isDisabled={disabled}
          htmlFor={id}
          hasError={!!error}
        >
          {label}
        </S.InputLabelStyles>
      )}
      <S.OuterInput
        isDisabled={disabled}
        hasError={!!error}
      >
        {!!icon && icon}
        <S.Input
          id={id}
          name={id}
          placeholder={placeholder}
          as={textArea ? 'textarea' : 'text'}
          onChange={handleChange}
          value={value}
          isDisabled={disabled}
          hasError={!!error}
        />
      </S.OuterInput>
      {!!error && (
        <S.InputError>{error}</S.InputError>
      )}
    </S.Main>
  )
}
