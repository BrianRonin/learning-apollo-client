import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useWindowSize } from 'usehooks-ts'
import { Container } from '../../components/Container/container_1'
import { FormUserSettings } from '../../components/Form/form_user_settings'
import { gql_updateUser } from '../../graphql/mutations/user'
import { authVariables } from '../../graphql/vars/auth'
import { User } from '../../types/backend'
import { tForm } from '../../types/form'
import * as S from './styles'

export const UserSettings = () => {
  const { width } = useWindowSize()

  const [errorMessage, setErrorMessage] = useState('')

  const router = useRouter()

  /**
   * Graphql
   */

  const [updateUser] = useMutation<{
    updateUser: User
  }>(gql_updateUser, {
    onCompleted: async ({ updateUser }) => {
      authVariables.var = updateUser
    },
    onError(error) {
      setErrorMessage(error.message)
    },
  })

  /**
   * Handles
   */

  const handleSubmit = async (user: tForm['updateUser']) => {
    const { email, userName } = user.input
    const input: Partial<tForm['updateUser']['input']> = {}
    email && (input.email = email)
    userName && (input.userName = userName)
    if (email || userName) {
      const { errors } = await updateUser({
        variables: { password: user.password, input },
        onError(error) {
          setErrorMessage(error.message)
        },
      })
      if (!errors) {
        await router.push({ pathname: '/', href: '/' })
        window.location.reload()
      }
    } else {
      setErrorMessage(
        'Você precisa atualizar um campo pelomenos',
      )
    }
  }

  // const handleDelete = async (password: string) => {
  //   if (password) {
  //     const { errors } = await deleteUser({
  //       variables: { password },
  //     })
  //     if (!errors) {
  //       authVariables.var = authVariables.schema
  //       await router.push({ pathname: '/', href: '/' })
  //       window.location.reload()
  //     }
  //   } else {
  //     setErrorMessage('Você precisa de inserir sua senha')
  //   }
  // }

  if (width <= 768)
    return (
      <S.Main>
        <FormUserSettings />
      </S.Main>
    )

  return (
    <S.Main>
      <Container>
        <FormUserSettings
          onSubmit={handleSubmit}
          errorMesage={errorMessage}
          // onDelete={handleDelete}
        />
      </Container>
    </S.Main>
  )
}
