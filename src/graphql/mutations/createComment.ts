import { gql } from '@apollo/client'
import { fragment_user } from '../fragments/user'

export const gql_createComment = gql`
  ${fragment_user}
  mutation createComment($comment: String!, $postId: String!) {
    createComment(data: { comment: $comment, postId: $postId }) {
      created_at
      comment
      id
      user {
        ...user
      }
    }
  }
`
