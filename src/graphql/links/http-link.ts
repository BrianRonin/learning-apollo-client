import {
  HttpLink,
  InMemoryCache,
} from '@apollo/client'

export const httpLink = new HttpLink({
  uri: 'http://179.159.233.150:4000',
  // credentials: 'include',
})
