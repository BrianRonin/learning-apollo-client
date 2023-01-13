import { gql } from '@apollo/client'

export const gql_me = gql`
  query Me {
    me {
      firstName
      lastName
      id
      userName
      email
      createdAt
    }
  }
`
