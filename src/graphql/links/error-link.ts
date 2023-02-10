import { onError } from '@apollo/client/link/error'
import { authVariables } from '../vars/auth'

export const errorLink = onError(
  ({ forward, operation, graphQLErrors, networkError }) => {
    if (!graphQLErrors) return

    graphQLErrors.forEach((error) => {
      const errorCode = error.extensions.code

      if (errorCode === 'UNAUTHENTICATED') {
        console.log('UNAUTHENTICATED OCORRIDO')
        authVariables.reset()
      }
    })
  },
)
