import * as S from './styles'
import React, { useState } from 'react'
import { RiLockPasswordLine } from 'react-icons/ri'
import { GiConfirmed } from 'react-icons/gi'
import { MdAlternateEmail } from 'react-icons/md'
import { Button } from '../../Button/button_0'
import { Input } from '../../Input/input_0'

export type formLoginProps = {
  errorMesage?: string
  onLogin?: (
    email: string,
    password: string,
    name: string,
  ) => any
  isNewUser?: boolean
}

export const FormLogin = ({
  errorMesage,
  onLogin = () => undefined,
}: formLoginProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassoword] = useState('')
  const [confirmPassword, setConfirmPassoword] =
    useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [isNewUser, setIsNewUser] =
    useState(false)
  const [
    confirmPasswordError,
    setConfirmPasswordError,
  ] = useState('')

  const handleSubmit = async (
    event: React.FormEvent,
  ) => {
    event.preventDefault()
    if (
      isNewUser &&
      password !== confirmPassword
    ) {
      setConfirmPasswordError('senha inválida')
      return
    }
    setLoading(true)
    if (onLogin) {
      await onLogin(email, password, name)
    }
    setLoading(false)
  }

  return (
    <S.Main onSubmit={handleSubmit}>
      <S.ContainerButton className='top-buttons'>
        <Button
          disabled={loading}
          outline={!isNewUser}
          onClick={(e) => {
            e.preventDefault()
            setIsNewUser(false)
          }}
        >
          {loading ? 'Aguarde...' : 'Entrar'}
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault()
            setIsNewUser(true)
          }}
          outline={isNewUser}
        >
          Criar conta
        </Button>
      </S.ContainerButton>
      <S.ContainerForm>
        {isNewUser && (
          <Input
            name='user_name'
            label='Nome'
            onChange={(v) => setName(v)}
            value={name}
            type='text'
          />
        )}
        <Input
          name='user_email'
          label='E-mail'
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
        {isNewUser && (
          <Input
            name='user_passord_'
            label='Confirme sua senha'
            onChange={(v) =>
              setConfirmPassoword(v)
            }
            value={confirmPassword}
            icon={<GiConfirmed />}
            type='password'
            errorMessage={confirmPasswordError}
          />
        )}
        <S.ContainerButton>
          <Button
            disabled={loading}
            onClick={() => handleSubmit}
            meta={{
              className: 'submit-button',
              type: 'submit',
            }}
          >
            {isNewUser
              ? loading
                ? 'Aguarde...'
                : 'Criar'
              : loading
              ? 'Aguarde...'
              : 'Entrar'}
          </Button>
        </S.ContainerButton>
        {!!errorMesage && (
          <S.ErrorMessage>
            {errorMesage}
          </S.ErrorMessage>
        )}
      </S.ContainerForm>
    </S.Main>
  )
}
