import { ApolloLink } from '@apollo/client'
import { authVariables } from '../vars/auth'
import { wsLink } from './ws-link'

export const forwardLink = new ApolloLink(
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

    return forward(operation).map((data) => {
      return data
    })
  },
)
