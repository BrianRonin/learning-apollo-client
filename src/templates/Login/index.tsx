import { useMutation } from '@apollo/client'
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
import { gql_me } from '../../graphql/mutations/me'
import { authVariables } from '../../graphql/vars/auth'
import { Auth, User } from '../../types/backend'
import * as S from './styles'

// export type loginProps = {
// }

export const Login = () => {
  // const [me] = useMutation<User>(gql_me)
  const [auth, { loading, error, data }] =
    useMutation<Auth>(gql_auth, {
      errorPolicy: 'all',
      // onCompleted: async ({ token }) => {
      // const {} = me({})
      // authVariables.var = {
      //   email: credentials.email,
      //   isLogged: true,
      //   name: credentials.name,
      //   userId: 'ffff',
      // }
      // },
    })

  const handleLogin = async (
    credentials: Credentials,
  ) => {
    const { email, name, password } = credentials
    try {
      const x = await auth({
        variables: { email, password },
      })
      console.log('response: ', x)
    } catch {
      //
    }
    console.log('error: ', error?.message)
  }

  const { width } = useWindowSize()

  if (width < 768) {
    return (
      <S.Main>
        <FormLogin
          onLogin={handleLogin}
          errorMesage={error?.message}
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
          errorMesage={error?.message}
        />
      </Container>
    </S.Main>
  )
}
