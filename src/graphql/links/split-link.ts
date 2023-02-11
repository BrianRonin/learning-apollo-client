import { split } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { authLink } from './auth-link'
import { httpLink } from './http-link'
import { wsLink } from './ws-link'

export const splitLink = wsLink
  ? split(
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
  : httpLink
// split(
//     ({ query }) => {
//       const definition = getMainDefinition(query)
//       if (
//         definition.kind === 'OperationDefinition' &&
//         definition.operation === 'subscription'
//       ) {
//         console.log('Fudeuuuuuu')
//       } else {
//         console.log('ok não fudeuuu')
//       }
//       return (
//         definition.kind === 'OperationDefinition' &&
//         definition.operation === 'subscription'
//       )
//     },
//     ,
//     authLink.concat(httpLink),
//   )
