import {
  HttpLink,
  InMemoryCache,
} from '@apollo/client'

export const httpLink = new HttpLink({
  uri: 'http://localhost:4000',
  // credentials: 'include',
})
