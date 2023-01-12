import * as S from './styles'
import React, { useState } from 'react'
import { RiLockPasswordLine } from 'react-icons/ri'
import { GiConfirmed } from 'react-icons/gi'
import { Button } from '../../Button/button_0'
import { Input } from '../../Input/input_0'

export type formResetPasswordProps = {
  errorMesage?: any
  onLogin?: any
}

export const FormResetPassword = ({
  errorMesage,
  onLogin,
}: formResetPasswordProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassoword] = useState('')
  const [confirmPassword, setConfirmPassword] =
    useState('')
  const [
    confirmPasswordError,
    setConfirmPasswordError,
  ] = useState('')

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (
    event: React.FormEvent,
  ) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      setConfirmPasswordError('senha inválida')
      return
    }
    setLoading(true)
    if (onLogin) {
      await onLogin(email, password)
    }
    setLoading(false)
  }

  return (
    <S.Main onSubmit={handleSubmit}>
      <h1 style={{ marginBottom: '5rem' }}>
        Acontece, agente fica velho e começa a
        esquercer das coisas... 🤭
      </h1>
      <Input
        name='user-password'
        label='Escolha uma nova senha'
        onChange={(v) => setPassoword(v)}
        value={password}
        icon={<RiLockPasswordLine />}
        type='password'
      />
      <Input
        name='user-repeat-password'
        label='Repita a senha'
        onChange={(v) => setConfirmPassword(v)}
        value={confirmPassword}
        icon={<GiConfirmed />}
        type='password'
        errorMessage={confirmPasswordError}
      />
      {!!errorMesage && (
        <S.ErrorMessage>
          {errorMesage}
        </S.ErrorMessage>
      )}
      <S.ContainerButton>
        <Button
          disabled={loading}
          meta={{ style: { width: '100%' } }}
        >
          {loading ? 'Aguarde...' : 'Salvar'}
        </Button>
      </S.ContainerButton>
    </S.Main>
  )
}
