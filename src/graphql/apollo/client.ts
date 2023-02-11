import { ApolloClient, from } from '@apollo/client'

import { asyncLink } from '../links/async-link'
import { errorLink } from '../links/error-link'
import { forwardLink } from '../links/forward-link'
import { splitLink } from '../links/split-link'
import { apolloCache } from './cache'

export const apolloClient = new ApolloClient({
  link: from([errorLink, forwardLink, asyncLink, splitLink]),
  cache: apolloCache,
})
