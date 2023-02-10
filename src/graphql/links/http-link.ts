import { HttpLink } from '@apollo/client'

export const httpLink = new HttpLink({
  uri: 'http://192.168.0.254:4000',
  // credentials: 'include',
})
