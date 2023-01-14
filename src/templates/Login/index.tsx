import {
  ApolloError,
  useLazyQuery,
  useMutation,
} from '@apollo/client'
import { useTheme } from '@emotion/react'
import { useEffect, useState } from 'react'
import {
  useScreen,
  useWindowSize,
} from 'usehooks-ts'
import { Container } from '../../components/Container/container_1'
import {
  Credentials,
  FormLogin,
} from '../../components/Form/form_login'
import { gql_auth } from '../../graphql/mutations/auth'
import { gql_createUser } from '../../graphql/mutations/createUser'
import { gql_me } from '../../graphql/queries/me'
import { authVariables } from '../../graphql/vars/auth'
import { Auth, User } from '../../types/backend'
import * as S from './styles'

// export type loginProps = {
// }

export const Login = () => {
  const [actualErrors, setActualErrors] =
    useState<string[]>([])
  const [me, { error: meError }] =
    useLazyQuery<{ me: User }>(gql_me)
  const [createUser, { error: createUserError }] =
    useMutation<{
      createUser: boolean
    }>(gql_createUser)
  const [
    auth,
    { loading, error: authError, data },
  ] = useMutation<{ auth: Auth }>(gql_auth, {
    onCompleted: async ({ auth: { token } }) => {
      authVariables.var = { token }
      await me({
        onCompleted: (user) => {
          authVariables.var = user.me
        },
      })
    },
  })

  useEffect(() => {
    const extractMessage = (
      obj: Array<Record<string, any> | undefined>,
    ) => {
      const resolve: string[] = []
      obj.forEach((obj) => {
        if (obj && obj.message) {
          return resolve.push(obj.message)
        }
      })
      return resolve
    }

    setActualErrors(
      extractMessage([
        meError,
        createUserError,
        authError,
      ]),
    )
    return () => {
      setActualErrors([])
    }
  }, [meError, createUserError, authError])

  const handleLogin = async (
    credentials: Credentials,
    isNewUser: boolean,
  ) => {
    const { email, userName, password } =
      credentials
    try {
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
    } catch {
      //
    }
    console.log('error: ', actualErrors)
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
      <Container
        custom={{ boxShadowOnHover: 'bg' }}
      >
        <FormLogin
          onLogin={handleLogin}
          errorMesage={actualErrors}
        />
      </Container>
    </S.Main>
  )
}
