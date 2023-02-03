import { gql } from '@apollo/client'
import { fragment_post } from '../fragments/post'

export const gql_editPost = gql`
  ${fragment_post}
  mutation editPost(
    $id: ID!
    $body: String!
    $title: String!
  ) {
    updatePost(
      id: $id
      postInput: { body: $body, title: $title }
    ) {
      ...post
    }
  }
`
