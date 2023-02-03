import {
  ApolloLink,
  HttpLink,
} from '@apollo/client'
import { authVariables } from '../vars/auth'

const httpLink = new HttpLink({
  uri: 'http://192.168.0.254:4000',
  // credentials: 'include',
})

export const apolloLink = new ApolloLink(
  (operation, forward) => {
    const authCtx = authVariables.var.token // operation.getContext().auth
    const auth = authCtx
      ? {
          authorization: 'Bearer ' + authCtx,
        }
      : {}

    operation.setContext(({ headers }: any) => ({
      headers: {
        ...headers,
        ...auth,
      },
    }))

    return forward(operation)
  },
).concat(httpLink)
