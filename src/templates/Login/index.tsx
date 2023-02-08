import {
  ApolloError,
  useLazyQuery,
  useMutation,
} from '@apollo/client'
import { useState } from 'react'
import { useWindowSize } from 'usehooks-ts'
import { Container } from '../../components/Container/container_1'
import {
  Credentials,
  FormLogin,
} from '../../components/Form/form_login'
import { gql_auth } from '../../graphql/mutations/auth'
import { gql_createUser } from '../../graphql/mutations/user'
import { gql_me } from '../../graphql/queries/me'
import { authVariables } from '../../graphql/vars/auth'
import { Auth, User } from '../../types/backend'
import * as S from './styles'

type errorsLogin = {
  createAccount: string[] | never[]
  login: string[] | never[]
}

const presetErrors = {
  createAccount: [],
  login: [],
}

export const Login = () => {
  const [actualErrors, setActualErrors] =
    useState<errorsLogin>(presetErrors)

  const handleError = (isCreateAccount?: boolean) => {
    return (e: ApolloError | undefined) => {
      if (e?.message)
        return setActualErrors((errors) => {
          const createAccount = [...errors.createAccount]
          const login = [...errors.login]
          isCreateAccount
            ? createAccount.push(e.message)
            : login.push(e.message)
          return {
            createAccount,
            login,
          }
        })
    }
  }

  const [me] = useLazyQuery<{
    me: User
  }>(gql_me, {
    onError: handleError(),
  })

  const [createUser] = useMutation<{
    createUser: boolean
  }>(gql_createUser, {
    onError: handleError(true),
  })

  const [auth] = useMutation<{
    auth: Auth
  }>(gql_auth, {
    onCompleted: async ({ auth: { token } }) => {
      authVariables.var = { token }
      await me({
        onCompleted: (user) => {
          authVariables.var = user.me
        },
      })
    },
    onError: handleError(),
  })

  const handleLogin = async (
    credentials: Credentials,
    isNewUser: boolean,
  ) => {
    const { email, userName, password } = credentials
    isNewUser
      ? await createUser({
          variables: {
            email,
            userName,
            password,
          },
        })
      : await auth({
          variables: { email, password },
        })
  }

  const { width } = useWindowSize()

  if (width < 768) {
    return (
      <S.Main>
        <FormLogin
          onLogin={handleLogin}
          errorMesage={actualErrors}
        />
      </S.Main>
    )
  }

  return (
    <S.Main>
      <Container custom={{ boxShadowOnHover: 'bg' }}>
        <FormLogin
          onLogin={handleLogin}
          errorMesage={actualErrors}
        />
      </Container>
    </S.Main>
  )
}
