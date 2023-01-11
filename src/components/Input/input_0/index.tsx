import { ChangeEvent, ReactNode } from 'react'
import * as S from './styles'
import { AiFillCloseCircle } from 'react-icons/ai'
import {
  useState,
  InputHTMLAttributes,
} from 'react'

export type inputProps = {
  label: string
  name: string
  type?: any
  disabled?: boolean
  onChange?: (
    value: string,
    event: ChangeEvent<HTMLInputElement>,
  ) => any
  errorMessage?: string
  value?: string
  icon?: ReactNode
  as?: 'input' | 'textarea'
  reference?: HTMLInputElement | null
  meta?: InputHTMLAttributes<HTMLInputElement>
}

export const Input = ({
  type = 'text',
  label,
  name,
  disabled = false,
  onChange,
  errorMessage = '',
  value = '',
  icon = false,
  as = 'input',
  meta,
}: inputProps) => {
  const [hasValue, setHasValue] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    const inputValue = e.target.value
    if (inputValue) {
      onChange && onChange(inputValue, e)
      !hasValue && setHasValue(true)
      setInputValue(inputValue)
    } else {
      cleanInput()
    }
  }

  const cleanInput = () => {
    setInputValue('')
    setHasValue(false)
  }

  return (
    <S.Main>
      <S.inputContainer
        errorMesage={errorMessage}
        hasIcon={!!icon}
      >
        <S.Input
          {...meta}
          type={type}
          name={name}
          id={name}
          disabled={disabled}
          placeholder={label}
          errorMessage={errorMessage}
          value={inputValue}
          as={as}
          defaultValue={value}
          onChange={handleChange}
        />
        <S.Label htmlFor={name} element={as}>
          {label}
        </S.Label>
        {!!icon && as !== 'textarea' && icon}
        {!icon &&
          as !== 'textarea' &&
          hasValue && (
            <AiFillCloseCircle
              onClick={cleanInput}
            />
          )}
      </S.inputContainer>
      {!!errorMessage && (
        <S.ErrorMessage>
          {errorMessage}
        </S.ErrorMessage>
      )}
    </S.Main>
  )
}
