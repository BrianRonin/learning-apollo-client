import * as S from './styles'
import React, { useState } from 'react'
import { RiLockPasswordLine } from 'react-icons/ri'
import { MdAlternateEmail } from 'react-icons/md'
import { Button } from '../../Button/button_0'
import { Input } from '../../Input/input_0'

export type formLoginProps = {
  errorMesage: any
  onLogin: any
}

export const FormLogin = ({
  errorMesage,
  onLogin,
}: formLoginProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassoword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (
    event: React.FormEvent,
  ) => {
    setLoading(true)
    event.preventDefault()
    if (onLogin) {
      await onLogin(email, password)
    }
    setLoading(false)
  }

  return (
    <S.Main onSubmit={handleSubmit}>
      <Input
        name='user-identifier'
        label='e-mail'
        onChange={(v) => setEmail(v)}
        value={email}
        icon={<MdAlternateEmail />}
        type='email'
      />
      <Input
        name='user_passord'
        label='Senha'
        onChange={(v) => setPassoword(v)}
        value={password}
        icon={<RiLockPasswordLine />}
        type='password'
      />
      {!!errorMesage && (
        <S.ErrorMessage>
          {errorMesage}
        </S.ErrorMessage>
      )}
      <S.ContainerButton>
        <Button disabled={loading}>
          {loading ? 'Aguarde...' : 'Entrar'}
        </Button>
      </S.ContainerButton>
    </S.Main>
  )
}
