import { gql } from '@apollo/client'

export const fragment_user = gql`
  fragment user on User {
    userName
    createdAt
    email
    id
  }
`
