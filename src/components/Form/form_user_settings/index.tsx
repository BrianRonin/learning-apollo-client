import * as S from './styles'
import React, { useState } from 'react'
import { RiLockPasswordLine } from 'react-icons/ri'
import { MdAlternateEmail } from 'react-icons/md'
import { Button } from '../../Button/button_0'
import { Input } from '../../Input/input_0'
import { Form } from '../form'
import { tForm } from '../../../types/form'

export type formUserSettingsProps = {
  errorMesage?: string
  onSubmit?: (user: tForm['updateUser']) => any
  onDelete?: (password: string) => any
}

export const FormUserSettings = ({
  errorMesage,
  onSubmit,
  onDelete = () => undefined,
}: formUserSettingsProps) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    setLoading(true)
    event.preventDefault()
    if (onSubmit) {
      await onSubmit({
        input: { email, userName: name },
        password,
      })
    }
    setLoading(false)
  }

  const handleDelete = async (event: React.FormEvent) => {
    event.preventDefault()
    await onDelete(password)
  }

  return (
    <S.Main>
      <Form
        meta={{
          onSubmit: handleSubmit,
        }}
      >
        <div className='content-form'>
          <Input
            name='user-name'
            label='Altere seu nome'
            onChange={(v) => setName(v)}
            value={name}
            type='name'
          />
          <Input
            name='user-email'
            label='Altere seu email'
            onChange={(v) => setEmail(v)}
            value={email}
            icon={<MdAlternateEmail />}
            type='email'
          />
          <Input
            name='user-password'
            label='Confirme sua senha'
            onChange={(v) => setPassword(v)}
            value={password}
            icon={<RiLockPasswordLine />}
            type='password'
          />
          {!!errorMesage && (
            <div className='error-message'>
              <ul>
                <li>{errorMesage}</li>
              </ul>
            </div>
          )}
          <div className='container-button'>
            <Button
              disabled={loading}
              meta={{ style: { width: '100%' } }}
            >
              {loading ? 'Aguarde...' : 'Salvar'}
            </Button>
            {/* <Button
              disabled={loading}
              meta={{
                style: { width: '100%' },
                className: 'button-delete-user',
              }}
              onClick={handleDelete}
            >
              Me deletar 😨
            </Button> */}
          </div>
        </div>
      </Form>
    </S.Main>
  )
}
