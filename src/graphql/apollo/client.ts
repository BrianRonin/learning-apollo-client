import { ApolloClient } from '@apollo/client'
import { InMemoryCache } from '@apollo/client/cache'
import { httpLink } from '../links/http-link'

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})
