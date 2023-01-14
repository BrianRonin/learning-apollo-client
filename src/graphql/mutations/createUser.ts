import { gql } from '@apollo/client'

export const gql_createUser = gql`
  mutation CreateUser(
    $email: String!
    $password: String!
    $userName: String!
  ) {
    createUser(
      userInput: {
        email: $email
        password: $password
        userName: $userName
      }
    )
  }
`
