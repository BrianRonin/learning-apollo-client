import * as S from './styles'
import React, { useEffect, useState } from 'react'
import { RiLockPasswordLine } from 'react-icons/ri'
import { GiConfirmed } from 'react-icons/gi'
import { MdAlternateEmail } from 'react-icons/md'
import { Button } from '../../Button/button_0'
import { Input } from '../../Input/input_0'
import {
  authVariables,
  useUser,
} from '../../../graphql/vars/auth'
import { Form } from '../form'

export type Credentials = {
  email: string
  password: string
  userName: string
}

export type formLoginProps = {
  errorMesage: {
    createAccount: string[] | never[]
    login: string[] | never[]
  }
  onLogin?: (
    credentials: Credentials,
    CreateUser: boolean,
  ) => any
}

export const FormLogin = ({
  errorMesage,
  onLogin = () => undefined,
}: formLoginProps) => {
  const auth = useUser()

  const [email, setEmail] = useState(auth.email)
  const [password, setPassoword] = useState('')
  const [confirmPassword, setConfirmPassoword] =
    useState('')

  const [userName, setUserName] = useState(
    auth.userName,
  )
  const [loading, setLoading] = useState(false)
  const [isNewUser, setIsNewUser] =
    useState(false)
  const [
    confirmPasswordError,
    setConfirmPasswordError,
  ] = useState('')

  useEffect(() => {
    console.log('auth: ', auth)
    console.log('message: ', errorMesage)
  }, [])

  const handleSubmit = async (
    event: React.FormEvent,
  ) => {
    event.preventDefault()
    if (
      isNewUser &&
      password !== confirmPassword
    ) {
      return setConfirmPasswordError(
        'senha inválida',
      )
    }
    setConfirmPasswordError('')
    setLoading(true)
    if (onLogin) {
      await onLogin(
        {
          email,
          password,
          userName,
        },
        isNewUser,
      )
    }
    setLoading(false)
  }

  return (
    <S.Main>
      <Form meta={{ onSubmit: handleSubmit }}>
        <div className='content-form'>
          <div className='container-button top-buttons'>
            <Button
              outline={isNewUser}
              onClick={(e) => {
                e.preventDefault()
                setIsNewUser(false)
              }}
            >
              Entrar
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault()
                setIsNewUser(true)
              }}
              outline={!isNewUser}
            >
              Criar conta
            </Button>
          </div>
          {isNewUser && (
            <Input
              name='user_name'
              label='Nome'
              onChange={(v) => setUserName(v)}
              value={userName}
              type='text'
              meta={{ required: true }}
            />
          )}
          <Input
            name='user_email'
            label='E-mail'
            onChange={(v) => setEmail(v)}
            value={email}
            icon={<MdAlternateEmail />}
            type='email'
            meta={{ required: true }}
          />
          <Input
            name='user_passord'
            label='Senha'
            onChange={(v) => setPassoword(v)}
            value={password}
            icon={<RiLockPasswordLine />}
            type='password'
            meta={{ required: true }}
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
              meta={{ required: true }}
            />
          )}
          <div className='container-button'>
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
          </div>
          {errorMesage[
            isNewUser ? 'createAccount' : 'login'
          ].length > 0 && (
            <div className='error-message'>
              <ul>
                {errorMesage[
                  isNewUser
                    ? 'createAccount'
                    : 'login'
                ].map((e, key) => (
                  <li key={'error-msg-' + key}>
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Form>
    </S.Main>
  )
}
