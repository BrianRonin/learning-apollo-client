import { gql } from '@apollo/client'

export const gql_auth = gql`
  mutation Auth(
    $email: String!
    $password: String!
  ) {
    auth(email: $email, password: $password) {
      token
      expires
    }
  }
`
