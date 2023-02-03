import { gql } from '@apollo/client'

export const gql_deletePost = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id)
  }
`
