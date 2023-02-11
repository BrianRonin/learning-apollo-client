import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
import { authVariables } from '../vars/auth'

export const wsLink =
  typeof window !== 'undefined'
    ? new GraphQLWsLink(
        createClient({
          url: 'ws://localhost:4000',
          connectionParams: authVariables.var.token
            ? {
                authorization:
                  'bearer ' + authVariables.var.token,
              }
            : {},
        }),
      )
    : undefined
