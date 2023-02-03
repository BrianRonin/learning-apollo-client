import { InMemoryCache } from '@apollo/client'

export const apolloCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        posts: {
          keyArgs: false,
          merge: (exists = [], incoming = []) => {
            return [...exists, ...incoming]
          },
        },
      },
    },
  },
})
