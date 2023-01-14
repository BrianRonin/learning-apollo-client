import {
  ApolloClient,
  from,
} from '@apollo/client'
import { InMemoryCache } from '@apollo/client/cache'
import { apolloLink } from '../links/http-link'

export const apolloClient = new ApolloClient({
  link: from([apolloLink]),
  cache: new InMemoryCache(),
})
