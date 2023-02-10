import { ApolloLink } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { authVariables } from '../vars/auth'
import { httpLink } from './http-link'
import { wsLink } from './ws-link'

export const forwardLink =
  typeof wsLink !== 'undefined'
    ? new ApolloLink((operation, forward) => {
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
      }).split(
        ({ query }) => {
          const definition = getMainDefinition(query)
          return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
          )
        },
        wsLink,
        httpLink,
      )
    : undefined
