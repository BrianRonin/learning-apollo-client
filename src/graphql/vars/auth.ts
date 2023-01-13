import { ApolloVariables } from './Class'

const schema = {
  firstName: '',
  lastName: '',
  userName: '',
  id: '',
  email: '',
  createdAt: '',
}

export const authVariables = new ApolloVariables(
  schema,
  '__user__',
)
