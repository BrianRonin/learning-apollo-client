import * as S from './styles'
import React, { useEffect, useState } from 'react'
import { RiLockPasswordLine } from 'react-icons/ri'
import { GiConfirmed } from 'react-icons/gi'
import { MdAlternateEmail } from 'react-icons/md'
import { Button } from '../../Button/button_0'
import { Input } from '../../Input/input_0'
import { authVariables } from '../../../graphql/vars/auth'

export type Credentials = {
  email: string
  password: string
  name: string
}

export type formLoginProps = {
  errorMesage?: string
  onLogin?: (credentials: Credentials) => any
  isNewUser?: boolean
}

export const FormLogin = ({
  errorMesage,
  onLogin = () => undefined,
}: formLoginProps) => {
  const auth = authVariables.use()

  const [email, setEmail] = useState(auth.email)
  const [password, setPassoword] = useState('')
  const [confirmPassword, setConfirmPassoword] =
    useState('')

  const [name, setName] = useState(auth.name)
  const [loading, setLoading] = useState(false)
  const [isNewUser, setIsNewUser] =
    useState(false)
  const [
    confirmPasswordError,
    setConfirmPasswordError,
  ] = useState('')

  useEffect(() => {
    console.log('auth: ', auth)
  }, [])

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
      const x = await onLogin({
        email,
        password,
        name,
      })
      console.log(x)
    }
    setLoading(false)
  }

  return (
    <S.Main onSubmit={handleSubmit}>
      <S.ContainerForm>
        <S.ContainerButton className='top-buttons'>
          <Button
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
