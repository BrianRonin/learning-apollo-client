import { gql } from '@apollo/client'
import { fragment_user } from '../fragments/user'

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
/**
 * Input: {
 *    email: String!
 *    userName: String!
 *  }
 */
export const gql_updateUser = gql`
  ${fragment_user}
  mutation updateUser($password: String!, $input: UpdateUser!) {
    updateUser(password: $password, userInput: $input) {
      ...user
    }
  }
`
