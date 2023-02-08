import { gql } from '@apollo/client'

export const gql_createUser = gql`
  mutation createUser(
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

export const gql_deleteUser = gql`
  mutation deleteUser($password: String!) {
    deleteUser(password: $password)
  }
`

export const gql_updateUser = gql`
  mutation updateUser($password: String!, $input: UpdateUser!) {
    updateUser(password: $password, userInput: $input) {
      userName
    }
  }
`
