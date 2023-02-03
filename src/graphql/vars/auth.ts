import { useReactiveVar } from '@apollo/client'
import { ApolloVariables } from './Class'

const schema = {
  firstName: '',
  lastName: '',
  userName: '',
  token: '',
  id: '',
  email: '',
  createdAt: '',
}
export const authVariables = new ApolloVariables(
  schema,
  '__user__',
)

export const useUser = () =>
  useReactiveVar(authVariables.variable)
