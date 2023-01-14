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
