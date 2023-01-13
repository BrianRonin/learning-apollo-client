import { useMutation } from '@apollo/client'
import { Credentials } from '../components/Form/form_login'
import { gql_auth } from '../graphql/mutations/auth'
import { Login } from '../templates/Login'

export default function PageLogin() {
  return <Login />
}
