import * as S from './styles'
import React, { useState } from 'react'
import { RiLockPasswordLine } from 'react-icons/ri'
import { MdAlternateEmail } from 'react-icons/md'
import { Button } from '../../Button/button_0'
import { Input } from '../../Input/input_0'

export type formUserSettingsProps = {
  errorMesage?: any
  onLogin?: any
}

export const FormUserSettings = ({
  errorMesage,
  onLogin,
}: formUserSettingsProps) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
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
        label='nome'
        onChange={(v) => setName(v)}
        value={name}
        type='name'
      />
      <Input
        name='user-identifier'
        label='email'
        onChange={(v) => setEmail(v)}
        value={email}
        icon={<MdAlternateEmail />}
        type='email'
      />
      <Input
        name='user-identifier'
        label='Repita sua senha'
        onChange={(v) => setPassword(v)}
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
        <Button
          disabled={loading}
          meta={{ style: { width: '100%' } }}
        >
          {loading ? 'Aguarde...' : 'Salvar'}
        </Button>
        <Button
          disabled={loading}
          meta={{
            style: { width: '100%' },
            className: 'button-delete-user',
          }}
        >
          Deletar usuário
        </Button>
      </S.ContainerButton>
    </S.Main>
  )
}
