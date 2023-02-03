import {
  ApolloClient,
  from,
} from '@apollo/client'

import { apolloLink } from '../links/http-link'
import { apolloCache } from './cache'

export const apolloClient = new ApolloClient({
  link: from([apolloLink]),
  cache: apolloCache,
})
