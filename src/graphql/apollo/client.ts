import { ApolloClient, from } from '@apollo/client'

import { asyncLink } from '../links/async-link'
import { forwardLink } from '../links/forward-link'
import { httpLink } from '../links/http-link'
import { apolloCache } from './cache'

export const apolloClient =
  typeof forwardLink !== 'undefined'
    ? new ApolloClient({
        link: from([forwardLink, httpLink, asyncLink]),
        cache: apolloCache,
      })
    : undefined
