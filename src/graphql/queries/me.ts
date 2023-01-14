import { gql } from '@apollo/client'

export const gql_me = gql`
  query Me {
    me {
      id
      userName
      email
      createdAt
    }
  }
`
